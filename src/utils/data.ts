export const bannerTemplates = [
  {
    name: "Instagram Post",
    height: 500,
    weight: 500,
  },
  {
    name: "Twitter Header",
    height: 500,
    weight: 1500,
  },
  {
    name: "Story",
    height: 1920,
    weight: 1080,
  },
] as const;

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;
