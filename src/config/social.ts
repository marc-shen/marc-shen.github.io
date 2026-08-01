import type { SocialLink } from "../types";

export const SOCIALS: SocialLink[] = [
  {
    name: "Github",
    href: "https://github.com/marc-shen",
    linkTitle: "Songyu Shen on GitHub",
    isActive: true,
  },
  {
    name: "Mail",
    href: "mailto:bnushensy@outlook.com",
    linkTitle: "Email Songyu Shen",
    isActive: true,
  },
  {
    name: "Google Scholar",
    href: "https://scholar.google.com/",
    linkTitle: "Google Scholar profile",
    isActive: false,
  },
  {
    name: "ORCID",
    href: "https://orcid.org/0009-0000-6275-3452",
    linkTitle: "Songyu Shen on ORCID",
    isActive: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/",
    linkTitle: "LinkedIn profile",
    isActive: false,
  },
];

export const SOCIAL_ICONS: Record<string, string> = {
  Github: "Github",
  Mail: "Mail",
  Linkedin: "LinkedIn",
  "Google Scholar": "GoogleScholar",
  ORCID: "ORCID",
  RSS: "RSS",
};
