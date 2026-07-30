import type { SiteConfig } from "@/types/site";

export const siteConfig: SiteConfig = {
  featureFlags: {
    languageSwitcher: true,
  },
  languages: {
    default: "en",
    available: [
      { code: "en", label: "English" },
      { code: "pl", label: "Polski" },
    ],
  },
};
