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
    subtitle: "Research publications and academic output.",
    isActive: true,
  },

  talks: {
    title: "Talks & Presentations",
    subtitle: "",
    isActive: false,
  },

  projects: {
    title: "Projects",
    subtitle: "Selected work in computational plasma physics.",
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
    subtitle: "Download my current curriculum vitae.",
    isActive: true,
  },
};
