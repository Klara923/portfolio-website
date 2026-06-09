"use client";

import { Suspense, useEffect, useMemo, useRef, type RefObject } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import type { Group, Points } from "three";

export type GalaxyPalette = {
  inner: string;
  outer: string;
  glow: string;
  planetA: string;
  planetB: string;
  planetC: string;
  halo: string;
};

const COUNT = 2800;
const RADIUS = 5;
const BRANCHES = 4;
const SPIN = 1.1;

const MAX_SCALE = 1.35;
const MIN_SCALE = 0.45;
const SCALE_LERP = 0.08;

const GALAXY_Y = 2.2;
const PLANET_X = -2.2;

const PLANET_VERTEX = `
  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vView;
  void main() {
    vUv = uv;
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    vNormal = normalize(normalMatrix * normal);
    vView = normalize(-mvPosition.xyz);
    gl_Position = projectionMatrix * mvPosition;
  }
`;

const PLANET_FRAGMENT = `
  uniform vec3 uColorA;
  uniform vec3 uColorB;
  uniform vec3 uColorC;
  uniform float uOpacity;
  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vView;
  void main() {
    float grad = smoothstep(0.0, 1.0, vUv.y);
    vec3 base = mix(uColorB, uColorA, grad);
    base = mix(base, uColorC, smoothstep(0.7, 1.0, grad));
    float fres = pow(1.0 - max(dot(vNormal, vView), 0.0), 2.2);
    vec3 color = base + uColorA * fres * 1.1;
    float edge = smoothstep(0.0, 0.45, max(dot(vNormal, vView), 0.0));
    gl_FragColor = vec4(color, uOpacity * edge);
  }
`;

const HALO_FRAGMENT = `
  uniform vec3 uColor;
  uniform float uStrength;
  varying vec3 vNormal;
  varying vec3 vView;
  void main() {
    float fres = pow(1.0 - max(dot(vNormal, vView), 0.0), 2.4);
    gl_FragColor = vec4(uColor, fres * uStrength);
  }
`;

function makeCircleTexture() {
  const size = 64;
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext("2d");
  if (ctx) {
    const g = ctx.createRadialGradient(
      size / 2,
      size / 2,
      0,
      size / 2,
      size / 2,
      size / 2,
    );
    g.addColorStop(0, "rgba(255,255,255,1)");
    g.addColorStop(0.4, "rgba(255,255,255,0.85)");
    g.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, size, size);
  }
  const tex = new THREE.CanvasTexture(canvas);
  tex.needsUpdate = true;
  return tex;
}

function Planet({
  position,
  palette,
}: {
  position: [number, number, number];
  palette: GalaxyPalette;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const haloRef = useRef<THREE.Mesh>(null);

  const uniforms = useMemo(
    () => ({
      uColorA: { value: new THREE.Color(palette.planetA) },
      uColorB: { value: new THREE.Color(palette.planetB) },
      uColorC: { value: new THREE.Color(palette.planetC) },
      uOpacity: { value: 0.5 },
    }),
    [palette],
  );

  const haloUniforms = useMemo(
    () => ({
      uColor: { value: new THREE.Color(palette.halo) },
      uStrength: { value: 0.5 },
    }),
    [palette],
  );

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <group position={position}>
      <mesh ref={haloRef} scale={1.55}>
        <sphereGeometry args={[1.15, 48, 48]} />
        <shaderMaterial
          uniforms={haloUniforms}
          vertexShader={PLANET_VERTEX}
          fragmentShader={HALO_FRAGMENT}
          transparent
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
      <mesh ref={meshRef}>
        <sphereGeometry args={[1.15, 64, 64]} />
        <shaderMaterial
          uniforms={uniforms}
          vertexShader={PLANET_VERTEX}
          fragmentShader={PLANET_FRAGMENT}
          transparent
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}

function useScrollRef() {
  const scrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      scrollY.current = window.scrollY;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return scrollY;
}

function Galaxy({
  scrollRef,
  palette,
}: {
  scrollRef: RefObject<number>;
  palette: GalaxyPalette;
}) {
  const scaleRef = useRef<Group>(null);
  const rotRef = useRef<Group>(null);
  const pointsRef = useRef<Points>(null);
  const smoothScale = useRef(MAX_SCALE);

  const sprite = useMemo(() => makeCircleTexture(), []);

  const { positions, colors, basePositions, seeds, glowPositions } =
    useMemo(() => {
      const positions = new Float32Array(COUNT * 3);
      const colors = new Float32Array(COUNT * 3);
      const seeds = new Float32Array(COUNT);
      const glow: number[] = [];
      const color = new THREE.Color();
      const innerColor = new THREE.Color(palette.inner);
      const outerColor = new THREE.Color(palette.outer);

      for (let i = 0; i < COUNT; i++) {
        const i3 = i * 3;
        const radius = Math.pow(Math.random(), 0.65) * RADIUS;
        const branchAngle = ((i % BRANCHES) / BRANCHES) * Math.PI * 2;
        const spinAngle = radius * SPIN;

        const randomX =
          Math.pow(Math.random(), 3) *
          (Math.random() < 0.5 ? 1 : -1) *
          0.5 *
          radius;
        const randomY =
          Math.pow(Math.random(), 3) *
          (Math.random() < 0.5 ? 1 : -1) *
          0.4 *
          radius;
        const randomZ =
          Math.pow(Math.random(), 3) *
          (Math.random() < 0.5 ? 1 : -1) *
          0.5 *
          radius;

        const px = Math.cos(branchAngle + spinAngle) * radius + randomX;
        const py = randomY;
        const pz = Math.sin(branchAngle + spinAngle) * radius + randomZ;

        positions[i3] = px;
        positions[i3 + 1] = py;
        positions[i3 + 2] = pz;

        color.copy(innerColor).lerp(outerColor, radius / RADIUS);
        colors[i3] = color.r;
        colors[i3 + 1] = color.g;
        colors[i3 + 2] = color.b;

        seeds[i] = Math.random() * Math.PI * 2;

        if (Math.random() < 0.12) {
          glow.push(px, py, pz);
        }
      }

      return {
        positions,
        colors,
        basePositions: positions.slice(),
        seeds,
        glowPositions: new Float32Array(glow),
      };
    }, [palette]);

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;

    if (rotRef.current) {
      rotRef.current.rotation.y += delta * 0.12;
      rotRef.current.rotation.x = THREE.MathUtils.lerp(
        rotRef.current.rotation.x,
        0.35 + state.pointer.y * 0.25,
        0.04,
      );
      rotRef.current.rotation.z = THREE.MathUtils.lerp(
        rotRef.current.rotation.z,
        state.pointer.x * 0.2,
        0.04,
      );
    }

    if (scaleRef.current) {
      const scroll = scrollRef.current ?? 0;
      const range =
        typeof window !== "undefined" ? window.innerHeight * 0.9 : 800;
      const progress = THREE.MathUtils.clamp(scroll / range, 0, 1);
      const targetScale = THREE.MathUtils.lerp(MAX_SCALE, MIN_SCALE, progress);
      smoothScale.current = THREE.MathUtils.lerp(
        smoothScale.current,
        targetScale,
        SCALE_LERP,
      );
      scaleRef.current.scale.setScalar(smoothScale.current);
    }

    const geom = pointsRef.current?.geometry;
    if (geom) {
      const pos = geom.attributes.position.array as Float32Array;
      for (let i = 0; i < COUNT; i++) {
        const i3 = i * 3;
        const seed = seeds[i];
        pos[i3 + 1] =
          basePositions[i3 + 1] + Math.sin(t * 0.6 + seed) * 0.18;
        pos[i3] = basePositions[i3] + Math.cos(t * 0.4 + seed) * 0.06;
      }
      geom.attributes.position.needsUpdate = true;
    }
  });

  return (
    <group ref={scaleRef} position={[0, GALAXY_Y, 0]}>
      <Planet position={[PLANET_X, 0, 0]} palette={palette} />
      <group ref={rotRef} rotation={[0.35, 0, 0]}>
        <points ref={pointsRef} frustumCulled={false}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              args={[positions, 3]}
            />
            <bufferAttribute attach="attributes-color" args={[colors, 3]} />
          </bufferGeometry>
          <pointsMaterial
            map={sprite}
            alphaMap={sprite}
            size={0.06}
            sizeAttenuation
            vertexColors
            transparent
            opacity={0.95}
            depthWrite={false}
            blending={THREE.AdditiveBlending}
          />
        </points>
        <points>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              args={[glowPositions, 3]}
            />
          </bufferGeometry>
          <pointsMaterial
            map={sprite}
            alphaMap={sprite}
            size={0.32}
            sizeAttenuation
            color={palette.glow}
            transparent
            opacity={0.8}
            depthWrite={false}
            blending={THREE.AdditiveBlending}
          />
        </points>
      </group>
    </group>
  );
}

export function ParticleGalaxy({ palette }: { palette: GalaxyPalette }) {
  const scrollRef = useScrollRef();

  return (
    <Canvas
      camera={{ position: [0, 1.4, 8], fov: 55 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      aria-hidden
    >
      <Suspense fallback={null}>
        <Galaxy scrollRef={scrollRef} palette={palette} />
      </Suspense>
    </Canvas>
  );
}
