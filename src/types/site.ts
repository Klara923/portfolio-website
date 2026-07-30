export type LanguageOption = {
  code: string;
  label: string;
};

export type SiteConfig = {
  featureFlags: {
    languageSwitcher: boolean;
  };
  languages: {
    default: string;
    available: LanguageOption[];
  };
};
