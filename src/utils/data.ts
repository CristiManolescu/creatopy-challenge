export const bannerTemplates = [
  {
    name: "Instagram Post",
    height: 500,
    width: 500,
  },
  {
    name: "Twitter Header",
    height: 500,
    width: 1500,
  },
  {
    name: "Story",
    height: 1920,
    width: 1080,
  },
] as const;

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;

export const ImageGenerateLink = "https://api.openai.com/v1/images/generations";
