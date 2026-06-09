"use client";

import { useEffect, useRef, type ReactNode, type RefObject } from "react";
import { useFrame } from "@react-three/fiber";
import type { Group } from "three";
import * as THREE from "three";

export const MIN_SCALE = 0.2;
export const MAX_SCALE = 1;
const SCROLL_LERP = 0.1;
const SCALE_LERP = 0.12;

export function useHeroScrollRef() {
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

export function ScrollScaleGroup({
  scrollRef,
  children,
  liftOnShrink = 1.2,
}: {
  scrollRef: RefObject<number>;
  children: ReactNode;
  liftOnShrink?: number;
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
    groupRef.current.position.y = THREE.MathUtils.lerp(
      0,
      liftOnShrink,
      1 - progress,
    );
  });

  return <group ref={groupRef}>{children}</group>;
}
