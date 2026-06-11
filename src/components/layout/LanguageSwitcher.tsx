"use client";

import { useEffect, useId, useRef, useState } from "react";
import { useLanguage } from "@/providers/LanguageProvider";
import { LanguageFlag } from "./LanguageFlag";
import styles from "./LanguageSwitcher.module.scss";

type LanguageSwitcherProps = {
  onSelect?: () => void;
};

export function LanguageSwitcher({ onSelect }: LanguageSwitcherProps) {
  const { language, setLanguage, languages, switcherEnabled, ready, getLabel } =
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
    <div className={styles.root} ref={rootRef}>
      <span className={styles.divider} aria-hidden />

      <button
        type="button"
        className={`${styles.trigger} ${open ? styles.triggerOpen : ""}`}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listboxId}
        aria-label={`Language: ${currentLabel}`}
        onClick={() => setOpen((value) => !value)}
      >
        <span className={styles.triggerFlag}>
          <LanguageFlag code={language} />
        </span>
        <span className={styles.code}>{language.toUpperCase()}</span>
        <span
          className={`${styles.chevron} ${open ? styles.chevronOpen : ""}`}
          aria-hidden
        />
      </button>

      <div
        className={`${styles.panel} ${open ? styles.panelOpen : ""}`}
        aria-hidden={!open}
      >
        <p className={styles.panelLabel}>Language</p>
        <ul id={listboxId} className={styles.menu} role="listbox">
          {languages.map((item) => {
            const selected = item.code === language;
            return (
              <li key={item.code} role="option" aria-selected={selected}>
                <button
                  type="button"
                  className={`${styles.option} ${selected ? styles.optionSelected : ""}`}
                  onClick={() => {
                    setLanguage(item.code);
                    setOpen(false);
                    onSelect?.();
                  }}
                >
                  <span className={styles.optionFlag}>
                    <LanguageFlag code={item.code} />
                  </span>
                  <span className={styles.optionCopy}>
                    <span className={styles.optionName}>
                      {getLabel(item.code)}
                    </span>
                    <span className={styles.optionCode}>
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
