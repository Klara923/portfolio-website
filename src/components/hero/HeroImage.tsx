import Image from "next/image";
import styles from "./HeroImage.module.scss";

export function HeroImage() {
  return (
    <div className={styles.wrap}>
      <Image
        src="/hero-macbook.png"
        alt="MacBook with floating 3D shapes"
        width={1578}
        height={793}
        priority
        className={styles.image}
        sizes="(max-width: 1200px) 95vw, 1200px"
      />
    </div>
  );
}
