import type { SiteConfig } from "@/types/site";

export const siteConfig: SiteConfig = {
  feature_flags: {
    language_switcher: true,
  },
  languages: {
    default: "en",
    available: [
      { code: "en", label: "English" },
      { code: "pl", label: "Polski" },
    ],
  },
};
