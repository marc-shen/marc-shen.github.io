import type {
  SiteConfig,
  ThemeConfig,
  SettingsConfig,
  UmamiAnalyticsConfig,
  AnalyticsConfig,
} from "../types";

export const SITE: SiteConfig = {
  website: "https://songyushen.com/",

  author: "Songyu Shen",

  desc: "Academic portfolio of Songyu Shen, an astronomy student at Beijing Normal University working on computational plasma physics.",

  title: "Songyu Shen",

  ogImage: "/assets/images/bio-photo.jpeg",

  postPerPage: 5,

  favicon: "/favicon.svg",

  lang: "en",
};

export const THEME_CONFIG: ThemeConfig = {
  // 仅亮色模式；如需恢复暗色切换，把 lightAndDark 改回 true
  lightAndDark: false,
  themeLight: "light_default",
  themeDark: "dark_notepad",
};

export const SETTINGS: SettingsConfig = {
  showTagsInNavbar: false,
  showRSSInFooter: false,
  addDevToolsInProduction: false,
};

const umami: UmamiAnalyticsConfig = {
  websiteId: "",
  src: "https://cloud.umami.is/script.js",
};

export const ANALYTICS: AnalyticsConfig = {
  ga4Id: "",
  umami,
};
