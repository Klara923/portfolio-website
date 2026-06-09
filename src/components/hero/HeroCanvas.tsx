"use client";

import {
  Suspense,
  useEffect,
  useMemo,
  useRef,
  type ReactNode,
  type RefObject,
} from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  MeshDistortMaterial,
  Stars,
} from "@react-three/drei";
import type { Group, Mesh } from "three";
import * as THREE from "three";
import styles from "./HeroCanvas.module.scss";

const ACCENT = "#7c6cff";
const ACCENT_SOFT = "#c4b5fd";

const MIN_SCALE = 0.2;
const MAX_SCALE = 1;
const SCROLL_LERP = 0.1;
const SCALE_LERP = 0.12;

function ScrollScaleGroup({
  scrollRef,
  children,
}: {
  scrollRef: RefObject<number>;
  children: ReactNode;
}) {
  const groupRef = useRef<Group>(null);
  const smoothScroll = useRef(0);
  const smoothScale = useRef(MAX_SCALE);

  useFrame(() => {
    const targetScroll = scrollRef.current ?? 0;
    smoothScroll.current = THREE.MathUtils.lerp(
      smoothScroll.current,
      targetScroll,
      SCROLL_LERP,
    );

    const scrollRange =
      typeof window !== "undefined" ? window.innerHeight * 0.8 : 700;
    const progress = THREE.MathUtils.clamp(
      smoothScroll.current / scrollRange,
      0,
      1,
    );
    const targetScale = THREE.MathUtils.lerp(MAX_SCALE, MIN_SCALE, progress);

    smoothScale.current = THREE.MathUtils.lerp(
      smoothScale.current,
      targetScale,
      SCALE_LERP,
    );

    if (!groupRef.current) return;
    groupRef.current.scale.setScalar(smoothScale.current);
    groupRef.current.position.y = THREE.MathUtils.lerp(0, 1.2, 1 - progress);
  });

  return <group ref={groupRef}>{children}</group>;
}

function MorphingCore() {
  const groupRef = useRef<Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime;
    const { x, y } = state.pointer;
    groupRef.current.rotation.y = t * 0.18;
    groupRef.current.position.x = THREE.MathUtils.lerp(
      groupRef.current.position.x,
      x * 0.45,
      0.06,
    );
    groupRef.current.position.y = THREE.MathUtils.lerp(
      groupRef.current.position.y,
      y * 0.25,
      0.06,
    );
  });

  return (
    <group ref={groupRef}>
      <Float speed={1.8} rotationIntensity={0.35} floatIntensity={1.1}>
        <mesh scale={1.65}>
          <icosahedronGeometry args={[1, 5]} />
          <MeshDistortMaterial
            color={ACCENT}
            emissive="#2a1f6e"
            emissiveIntensity={0.55}
            roughness={0.15}
            metalness={0.85}
            distort={0.38}
            speed={2.2}
          />
        </mesh>
      </Float>
      <mesh scale={2.05}>
        <icosahedronGeometry args={[1, 2]} />
        <meshBasicMaterial
          color={ACCENT_SOFT}
          wireframe
          transparent
          opacity={0.12}
        />
      </mesh>
    </group>
  );
}

function OrbitRings() {
  const inner = useRef<Mesh>(null);
  const outer = useRef<Mesh>(null);

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;
    if (inner.current) {
      inner.current.rotation.x += delta * 0.45;
      inner.current.rotation.z += delta * 0.25;
      inner.current.rotation.y = t * 0.12;
    }
    if (outer.current) {
      outer.current.rotation.x -= delta * 0.2;
      outer.current.rotation.y += delta * 0.35;
    }
  });

  return (
    <group>
      <mesh ref={inner} rotation={[Math.PI / 2.4, 0.3, 0]}>
        <torusGeometry args={[2.6, 0.018, 64, 128]} />
        <meshBasicMaterial color={ACCENT_SOFT} transparent opacity={0.45} />
      </mesh>
      <mesh ref={outer} rotation={[Math.PI / 3.2, 0.8, 0.5]}>
        <torusGeometry args={[3.4, 0.012, 48, 128]} />
        <meshBasicMaterial color={ACCENT} transparent opacity={0.22} />
      </mesh>
    </group>
  );
}

function GlowParticles() {
  const ref = useRef<THREE.Points>(null);

  const geometry = useMemo(() => {
    const count = 420;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const radius = 2.2 + Math.random() * 2.8;
      const angle = Math.random() * Math.PI * 2;
      const y = (Math.random() - 0.5) * 2.5;
      positions[i * 3] = Math.cos(angle) * radius;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = Math.sin(angle) * radius;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return geo;
  }, []);

  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.08;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
  });

  return (
    <points ref={ref} geometry={geometry} frustumCulled={false}>
      <pointsMaterial
        size={0.06}
        color={ACCENT_SOFT}
        transparent
        opacity={0.85}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function HeroScene({ scrollRef }: { scrollRef: RefObject<number> }) {
  return (
    <>
      <color attach="background" args={["#0f0f12"]} />
      <fog attach="fog" args={["#0f0f12", 12, 38]} />
      <Stars
        radius={42}
        depth={28}
        count={2200}
        factor={3.5}
        saturation={0.45}
        fade
        speed={0.35}
      />
      <ambientLight intensity={0.35} />
      <pointLight position={[6, 4, 6]} intensity={2.2} color={ACCENT} />
      <pointLight position={[-6, -2, 4]} intensity={1.1} color="#a78bfa" />
      <spotLight
        position={[0, 8, 2]}
        angle={0.35}
        penumbra={1}
        intensity={0.8}
        color="#ede9fe"
      />
      <ScrollScaleGroup scrollRef={scrollRef}>
        <MorphingCore />
        <OrbitRings />
        <GlowParticles />
      </ScrollScaleGroup>
    </>
  );
}

export function HeroCanvas() {
  const scrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      scrollY.current = window.scrollY;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={styles.canvas} aria-hidden>
      <Canvas
        camera={{ position: [0, 0, 7.5], fov: 50 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: false }}
      >
        <Suspense fallback={null}>
          <HeroScene scrollRef={scrollY} />
        </Suspense>
      </Canvas>
      <div className={styles.glow} />
      <div className={styles.vignette} />
    </div>
  );
}
