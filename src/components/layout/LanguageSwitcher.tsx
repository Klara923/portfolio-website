"use client";

import { useEffect, useId, useRef, useState } from "react";
import { useLanguage } from "@/providers/LanguageProvider";
import { LanguageFlag } from "./LanguageFlag";
import styles from "@/styles/layout.module.scss";

type LanguageSwitcherProps = {
  onSelect?: () => void;
};

export function LanguageSwitcher({ onSelect }: LanguageSwitcherProps) {
  const { language, setLanguage, languages, switcherEnabled, ready, getLabel, t } =
    useLanguage();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const listboxId = useId();

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", onPointerDown);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  if (!ready || !switcherEnabled || languages.length < 2) {
    return null;
  }

  const currentLabel = getLabel(language);

  return (
    <div className={styles.langRoot} ref={rootRef}>
      <span className={styles.langDivider} aria-hidden />

      <button
        type="button"
        className={`${styles.langTrigger} ${open ? styles.langTriggerOpen : ""}`}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listboxId}
        aria-label={`Language: ${currentLabel}`}
        onClick={() => setOpen((value) => !value)}
      >
        <span className={styles.langTriggerFlag}>
          <LanguageFlag code={language} />
        </span>
        <span className={styles.langCode}>{language.toUpperCase()}</span>
        <span
          className={`${styles.langChevron} ${open ? styles.langChevronOpen : ""}`}
          aria-hidden
        />
      </button>

      <div
        className={`${styles.langPanel} ${open ? styles.langPanelOpen : ""}`}
        aria-hidden={!open}
      >
        <p className={styles.langPanelLabel}>{t("nav.language")}</p>
        <ul id={listboxId} className={styles.langMenu} role="listbox">
          {languages.map((item) => {
            const selected = item.code === language;
            return (
              <li key={item.code} role="option" aria-selected={selected}>
                <button
                  type="button"
                  className={`${styles.langOption} ${selected ? styles.langOptionSelected : ""}`}
                  onClick={() => {
                    setLanguage(item.code);
                    setOpen(false);
                    onSelect?.();
                  }}
                >
                  <span className={styles.langOptionFlag}>
                    <LanguageFlag code={item.code} />
                  </span>
                  <span className={styles.langOptionCopy}>
                    <span className={styles.langOptionName}>
                      {getLabel(item.code)}
                    </span>
                    <span className={styles.langOptionCode}>
                      {item.code.toUpperCase()}
                    </span>
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
