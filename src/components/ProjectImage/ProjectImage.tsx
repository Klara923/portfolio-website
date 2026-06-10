"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./ProjectImage.module.scss";

type ProjectImageProps = {
  src: string;
  alt: string;
  className?: string;
  fill?: boolean;
  sizes?: string;
  priority?: boolean;
};

export function ProjectImage({
  src,
  alt,
  className,
  fill = false,
  sizes,
  priority = false,
}: ProjectImageProps) {
  const [useFallback, setUseFallback] = useState(false);
  const imageClassName = [className, fill ? styles.fill : ""]
    .filter(Boolean)
    .join(" ");

  if (useFallback) {
    return (
      // eslint-disable-next-line @next/next/no-img-element -- fallback when next/image optimization fails
      <img src={src} alt={alt} className={imageClassName} />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      className={imageClassName}
      sizes={sizes}
      priority={priority}
      unoptimized
      onError={() => setUseFallback(true)}
    />
  );
}
