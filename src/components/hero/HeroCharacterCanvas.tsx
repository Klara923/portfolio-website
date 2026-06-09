"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { CuteCharacter } from "./CuteCharacter";
import { ScrollScaleGroup, useHeroScrollRef } from "./scrollScale";
import styles from "./HeroCharacterCanvas.module.scss";

function CharacterScene({ scrollRef }: { scrollRef: ReturnType<typeof useHeroScrollRef> }) {
  return (
    <>
      <color attach="background" args={["#0f0f12"]} />
      <fog attach="fog" args={["#0f0f12", 14, 32]} />
      <ambientLight intensity={0.65} color="#f5f0ff" />
      <directionalLight
        position={[4, 6, 5]}
        intensity={1.1}
        color="#fff8ef"
      />
      <directionalLight
        position={[-5, 2, 3]}
        intensity={0.45}
        color="#c4b5fd"
      />
      <pointLight position={[0, 2, 4]} intensity={0.6} color="#faf5ff" />
      <ScrollScaleGroup scrollRef={scrollRef}>
        <CuteCharacter />
      </ScrollScaleGroup>
    </>
  );
}

export function HeroCharacterCanvas() {
  const scrollRef = useHeroScrollRef();

  return (
    <div className={styles.canvas} aria-hidden>
      <Canvas
        camera={{ position: [0, -0.55, 6.2], fov: 40 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: false }}
      >
        <Suspense fallback={null}>
          <CharacterScene scrollRef={scrollRef} />
        </Suspense>
      </Canvas>
      <div className={styles.glow} />
      <div className={styles.vignette} />
    </div>
  );
}
