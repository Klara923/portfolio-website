"use client";

import { useState } from "react";
import Spline from "@splinetool/react-spline";
import type { Application } from "@splinetool/runtime";
import styles from "./HeroSpline.module.scss";

const SCENE_URL =
  "https://prod.spline.design/UoDNAQfzObHP4XjI/scene.splinecode";

function disablePointerControls(app: Application) {
  const controls = app.controls as { enabled?: boolean } | undefined;
  if (controls && "enabled" in controls) {
    controls.enabled = false;
  }
}

export function HeroSpline() {
  const [error, setError] = useState<string | null>(null);

  if (error) {
    return (
      <p className={styles.error} role="alert">
        Could not load 3D scene. Check your network connection and refresh.
      </p>
    );
  }

  return (
    <div className={styles.wrapper}>
      <Spline
        scene={SCENE_URL}
        className={styles.canvas}
        onLoad={disablePointerControls}
        onError={() => setError("Failed to load Spline scene")}
      />
    </div>
  );
}
