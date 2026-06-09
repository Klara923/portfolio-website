import { HeroImage } from "./HeroImage";
import styles from "./HeroSection.module.scss";

type HeroSectionProps = {
  title?: string;
  subtitle?: string;
};

export function HeroSection({
  title = "Portfolio",
  subtitle = "Developer · Designer · Builder",
}: HeroSectionProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <p className={styles.eyebrow}>Welcome</p>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
      <HeroImage />
    </section>
  );
}
