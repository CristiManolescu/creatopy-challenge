export const bannerTemplates = [
  {
    name: "Instagram Post",
    size: "500x500",
  },
  {
    name: "Twitter Header",
    size: "1500x500",
  },
  {
    name: "Story",
    size: "1080x1920",
  },
] as const;

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;

export const ImageGenerateLink = "https://api.openai.com/v1/images/generations";
