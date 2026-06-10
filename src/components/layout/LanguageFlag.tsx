import styles from "./LanguageFlag.module.scss";

type LanguageFlagProps = {
  code: string;
};

export function LanguageFlag({ code }: LanguageFlagProps) {
  if (code === "pl") {
    return (
      <svg className={styles.flag} viewBox="0 0 20 14" aria-hidden>
        <rect width="20" height="7" fill="#ffffff" />
        <rect y="7" width="20" height="7" fill="#dc143c" />
      </svg>
    );
  }

  return (
    <svg className={styles.flag} viewBox="0 0 20 14" aria-hidden>
      <rect width="20" height="14" fill="#b22234" />
      <rect y="1.08" width="20" height="1.08" fill="#ffffff" />
      <rect y="3.23" width="20" height="1.08" fill="#ffffff" />
      <rect y="5.38" width="20" height="1.08" fill="#ffffff" />
      <rect y="7.54" width="20" height="1.08" fill="#ffffff" />
      <rect y="9.69" width="20" height="1.08" fill="#ffffff" />
      <rect y="11.85" width="20" height="1.08" fill="#ffffff" />
      <rect width="8" height="7.54" fill="#3c3b6e" />
    </svg>
  );
}
