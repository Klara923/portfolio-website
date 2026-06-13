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
    <svg className={styles.flag} viewBox="0 0 60 30" aria-hidden>
      <rect width="60" height="30" fill="#012169" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#ffffff" strokeWidth="5" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="2" />
      <path d="M30,0 v30 M0,15 h60" stroke="#ffffff" strokeWidth="8" />
      <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="4" />
    </svg>
  );
}
