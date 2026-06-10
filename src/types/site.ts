export type LanguageOption = {
  code: string;
  label: string;
};

export type SiteConfig = {
  feature_flags: {
    language_switcher: boolean;
  };
  languages: {
    default: string;
    available: LanguageOption[];
  };
};
