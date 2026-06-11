"use client";

import { useEffect, useMemo, useState } from "react";
import { site } from "@/data/portfolio";
import { useLanguage } from "@/providers/LanguageProvider";
import { LanguageSwitcher } from "./LanguageSwitcher";
import styles from "./SiteHeader.module.scss";

export function SiteHeader() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = useMemo(
    () => [
      { label: t("nav.experience"), href: "/#experience" },
      { label: t("nav.projects"), href: "/#projects" },
      { label: t("nav.contact"), href: "/#contact" },
    ],
    [t],
  );

  const socialItems = useMemo(
    () => [
      { label: t("nav.email"), href: `mailto:${site.contact.email}` },
      { label: t("nav.github"), href: site.contact.github },
      { label: t("nav.linkedin"), href: site.contact.linkedin },
    ],
    [t],
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={`${styles.header} ${scrolled || menuOpen ? styles.scrolled : ""}`}
    >
      <div className={styles.inner}>
        <button
          type="button"
          className={styles.menuButton}
          aria-label={menuOpen ? t("nav.closeMenu") : t("nav.openMenu")}
          aria-expanded={menuOpen}
          aria-controls="primary-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span
            className={`${styles.menuIcon} ${menuOpen ? styles.menuIconOpen : ""}`}
            aria-hidden
          />
        </button>

        <nav
          id="primary-nav"
          className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}
          aria-label={t("nav.main")}
        >
          <div className={styles.navGroup}>
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={styles.navLink}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className={styles.navEnd}>
            <div className={styles.navGroup}>
              {socialItems.map((item) => {
                const isMail = item.href.startsWith("mailto:");
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className={`${styles.navLink} ${styles.navSocial}`}
                    onClick={() => setMenuOpen(false)}
                    {...(isMail
                      ? {}
                      : { target: "_blank", rel: "noopener noreferrer" })}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>

            <LanguageSwitcher onSelect={() => setMenuOpen(false)} />
          </div>
        </nav>
      </div>
    </header>
  );
}
