import type { PagesConfig } from "../types";

export const PAGES: PagesConfig = {
  home: {
    title: "Home",
    subtitle: "",
    isActive: true,
  },

  blog: {
    title: "Blog",
    subtitle: "",
    isActive: false,
  },

  publications: {
    title: "Publications",
    subtitle: "Published papers, submitted manuscripts, and work in preparation.",
    isActive: true,
  },

  talks: {
    title: "Talks & Presentations",
    subtitle: "",
    isActive: false,
  },

  projects: {
    title: "Projects",
    subtitle: "Research in fast radio bursts, plasma simulations, and high-energy transients.",
    isActive: true,
  },

  teaching: {
    title: "Teaching",
    subtitle: "",
    isActive: false,
  },

  tags: {
    title: "Tags",
    subtitle: "",
    isActive: false,
  },

  cv: {
    title: "Curriculum Vitae",
    subtitle: "Education, research experience, and academic activities.",
    isActive: true,
  },
};
