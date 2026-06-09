"use client";

import { useEffect, useRef, type RefObject } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, RoundedBox } from "@react-three/drei";
import type { Group, Mesh } from "three";
import * as THREE from "three";

const SKIN = "#ffece0";
const SKIN_SHADOW = "#f5d4c4";
const HAIR = "#e8d4a0";
const HAIR_LIGHT = "#f7ecc4";
const HAIR_SHADOW = "#c9b06e";
const EYE = "#121212";
const EYE_RADIUS = 0.2;
const PUPIL = "#1a1a1a";
const BLUSH = "#f5b0b8";
const LIP = "#e8a0a8";
const UNIFORM = "#4a4d58";
const COLLAR = "#f5f5f5";
const BOW = "#e87898";

type BlinkState = {
  phase: "idle" | "closing" | "opening";
  timer: number;
  nextBlink: number;
};

function useBlink(eyeRefs: RefObject<Mesh | null>[]) {
  const blink = useRef<BlinkState>({
    phase: "idle",
    timer: 0,
    nextBlink: 2 + Math.random() * 2.5,
  });

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;
    const b = blink.current;

    if (b.phase === "idle" && t >= b.nextBlink) {
      b.phase = "closing";
      b.timer = 0;
    }

    let scale = 1;
    if (b.phase === "closing") {
      b.timer += delta;
      scale = THREE.MathUtils.lerp(1, 0.06, Math.min(b.timer / 0.07, 1));
      if (b.timer >= 0.07) {
        b.phase = "opening";
        b.timer = 0;
      }
    } else if (b.phase === "opening") {
      b.timer += delta;
      scale = THREE.MathUtils.lerp(0.06, 1, Math.min(b.timer / 0.1, 1));
      if (b.timer >= 0.1) {
        b.phase = "idle";
        b.nextBlink = t + 2.2 + Math.random() * 2.8;
      }
    }

    for (const ref of eyeRefs) {
      if (ref.current) {
        const s = EYE_RADIUS * scale;
        ref.current.scale.set(s, s, s);
      }
    }
  });
}

function AnimeHair() {
  return (
    <group>
      <group position={[0, 0.15, -0.48]}>
        <mesh scale={[1.38, 1.75, 0.95]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color={HAIR_SHADOW} roughness={0.94} />
        </mesh>
      </group>

      <mesh position={[0, -0.85, -0.38]} scale={[1.25, 1.9, 0.55]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={HAIR_SHADOW} roughness={0.94} />
      </mesh>

      <mesh position={[0, 0.72, -0.08]} scale={[1.28, 0.62, 1.12]}>
        <sphereGeometry args={[1, 28, 28]} />
        <meshStandardMaterial color={HAIR} roughness={0.92} />
      </mesh>

      <mesh
        position={[-0.32, 0.52, 0.52]}
        rotation={[0, 0, 0.32]}
        scale={[0.48, 0.72, 0.38]}
      >
        <capsuleGeometry args={[0.35, 0.55, 8, 16]} />
        <meshStandardMaterial color={HAIR} roughness={0.92} />
      </mesh>
      <mesh
        position={[0.32, 0.52, 0.52]}
        rotation={[0, 0, -0.32]}
        scale={[0.48, 0.72, 0.38]}
      >
        <capsuleGeometry args={[0.35, 0.55, 8, 16]} />
        <meshStandardMaterial color={HAIR} roughness={0.92} />
      </mesh>

      <mesh position={[-1.02, -0.45, 0.12]} scale={[0.42, 2.35, 0.38]}>
        <capsuleGeometry args={[0.36, 1.85, 8, 16]} />
        <meshStandardMaterial color={HAIR} roughness={0.92} />
      </mesh>
      <mesh position={[1.02, -0.45, 0.12]} scale={[0.42, 2.35, 0.38]}>
        <capsuleGeometry args={[0.36, 1.85, 8, 16]} />
        <meshStandardMaterial color={HAIR} roughness={0.92} />
      </mesh>

      <mesh
        position={[-0.88, -1.35, 0.18]}
        scale={[0.32, 0.55, 0.3]}
        rotation={[0.1, 0, 0.15]}
      >
        <capsuleGeometry args={[0.28, 0.4, 6, 12]} />
        <meshStandardMaterial color={HAIR_SHADOW} roughness={0.94} />
      </mesh>
      <mesh
        position={[0.88, -1.35, 0.18]}
        scale={[0.32, 0.55, 0.3]}
        rotation={[0.1, 0, -0.15]}
      >
        <capsuleGeometry args={[0.28, 0.4, 6, 12]} />
        <meshStandardMaterial color={HAIR_SHADOW} roughness={0.94} />
      </mesh>

      <mesh
        position={[-0.42, 0.88, 0.35]}
        scale={[0.22, 0.38, 0.12]}
        rotation={[0, 0, 0.4]}
      >
        <sphereGeometry args={[1, 12, 12]} />
        <meshStandardMaterial color={HAIR_LIGHT} roughness={0.88} />
      </mesh>
      <mesh
        position={[0.42, 0.88, 0.35]}
        scale={[0.22, 0.38, 0.12]}
        rotation={[0, 0, -0.4]}
      >
        <sphereGeometry args={[1, 12, 12]} />
        <meshStandardMaterial color={HAIR_LIGHT} roughness={0.88} />
      </mesh>
    </group>
  );
}

function DotEye({
  side,
  meshRef,
}: {
  side: "left" | "right";
  meshRef: RefObject<Mesh | null>;
}) {
  const x = side === "left" ? -0.37 : 0.37;

  return (
    <mesh ref={meshRef} position={[x, 0.04, 0.94]}>
      <sphereGeometry args={[1, 24, 24]} />
      <meshStandardMaterial color={EYE} roughness={0.4} />
    </mesh>
  );
}

function Head({
  leftEyeRef,
  rightEyeRef,
}: {
  leftEyeRef: RefObject<Mesh | null>;
  rightEyeRef: RefObject<Mesh | null>;
}) {
  return (
    <group>
      <mesh scale={[1.08, 1.1, 0.96]}>
        <sphereGeometry args={[1.1, 48, 48]} />
        <meshStandardMaterial color={SKIN} roughness={0.9} metalness={0} />
      </mesh>

      <DotEye side="left" meshRef={leftEyeRef} />
      <DotEye side="right" meshRef={rightEyeRef} />

      <mesh position={[-0.58, -0.08, 0.88]} scale={[0.14, 0.08, 0.04]} rotation={[0, 0, 0.2]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={PUPIL} roughness={0.5} />
      </mesh>
      <mesh position={[0.58, -0.08, 0.88]} scale={[0.14, 0.08, 0.04]} rotation={[0, 0, -0.2]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={PUPIL} roughness={0.5} />
      </mesh>

      <mesh position={[0, -0.18, 0.9]} scale={[0.04, 0.04, 0.03]}>
        <sphereGeometry args={[1, 12, 12]} />
        <meshStandardMaterial color={LIP} roughness={0.8} />
      </mesh>

      <mesh position={[0, -0.28, 0.89]} scale={[0.12, 0.025, 0.03]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={LIP} roughness={0.75} />
      </mesh>

      <mesh position={[-0.62, -0.12, 0.86]} scale={[0.16, 0.1, 0.05]}>
        <sphereGeometry args={[1, 16, 16]} />
        <meshStandardMaterial
          color={BLUSH}
          transparent
          opacity={0.45}
          roughness={0.95}
        />
      </mesh>
      <mesh position={[0.62, -0.12, 0.86]} scale={[0.16, 0.1, 0.05]}>
        <sphereGeometry args={[1, 16, 16]} />
        <meshStandardMaterial
          color={BLUSH}
          transparent
          opacity={0.45}
          roughness={0.95}
        />
      </mesh>
    </group>
  );
}

function SchoolUniform() {
  return (
    <group position={[0, -1.05, 0.02]}>
      <RoundedBox
        args={[1.85, 1.15, 0.9]}
        radius={0.2}
        smoothness={5}
        position={[0, -0.35, 0]}
      >
        <meshStandardMaterial color={UNIFORM} roughness={0.92} />
      </RoundedBox>

      <mesh position={[0, 0.08, 0.38]} scale={[1.7, 0.55, 0.12]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={COLLAR} roughness={0.9} />
      </mesh>
      <mesh position={[0, 0.02, 0.42]} scale={[1.55, 0.06, 0.08]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#d8d8d8" roughness={0.9} />
      </mesh>

      <mesh position={[-0.18, 0.02, 0.48]} scale={[0.22, 0.14, 0.08]} rotation={[0, 0, 0.5]}>
        <sphereGeometry args={[1, 12, 12]} />
        <meshStandardMaterial color={BOW} roughness={0.85} />
      </mesh>
      <mesh position={[0.18, 0.02, 0.48]} scale={[0.22, 0.14, 0.08]} rotation={[0, 0, -0.5]}>
        <sphereGeometry args={[1, 12, 12]} />
        <meshStandardMaterial color={BOW} roughness={0.85} />
      </mesh>
      <mesh position={[0, 0.02, 0.5]} scale={[0.1, 0.1, 0.06]}>
        <sphereGeometry args={[1, 10, 10]} />
        <meshStandardMaterial color={BOW} roughness={0.85} />
      </mesh>
    </group>
  );
}

function Neck() {
  return (
    <mesh position={[0, -0.62, 0.04]} scale={[0.34, 0.22, 0.32]}>
      <cylinderGeometry args={[0.3, 0.36, 0.38, 20]} />
      <meshStandardMaterial color={SKIN_SHADOW} roughness={0.9} />
    </mesh>
  );
}

export function CuteCharacter() {
  const rootRef = useRef<Group>(null);
  const leftEyeRef = useRef<Mesh>(null);
  const rightEyeRef = useRef<Mesh>(null);

  useBlink([leftEyeRef, rightEyeRef]);

  useEffect(() => {
    for (const ref of [leftEyeRef, rightEyeRef]) {
      if (ref.current) {
        ref.current.scale.set(EYE_RADIUS, EYE_RADIUS, EYE_RADIUS);
      }
    }
  }, []);

  useFrame((state) => {
    if (!rootRef.current) return;
    const t = state.clock.elapsedTime;
    const { x, y } = state.pointer;
    rootRef.current.rotation.y = THREE.MathUtils.lerp(
      rootRef.current.rotation.y,
      x * 0.14,
      0.06,
    );
    rootRef.current.rotation.x = THREE.MathUtils.lerp(
      rootRef.current.rotation.x,
      -y * 0.06,
      0.06,
    );
    rootRef.current.position.y =
      -1.55 + Math.sin(t * 1.1) * 0.05;
  });

  return (
    <Float speed={1.1} rotationIntensity={0.06} floatIntensity={0.28}>
      <group ref={rootRef}>
        <AnimeHair />
        <SchoolUniform />
        <Neck />
        <group position={[0, 0, 0]}>
          <Head leftEyeRef={leftEyeRef} rightEyeRef={rightEyeRef} />
        </group>
      </group>
    </Float>
  );
}
