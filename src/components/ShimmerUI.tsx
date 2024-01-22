import { FC } from "react";
import styled, { css } from "styled-components";

interface ShimmerProps {
  template?: "Instagram Post" | "Twitter Header" | "Story";
}

interface textTypeProps {
  textType?: "title" | "button";
}

export const ShimmerUI: FC<ShimmerProps> = ({ template }) => {
  return (
    <ShimmerContainer>
      <ShimmerImage template={template}></ShimmerImage>
      <ShimmerText textType="title"></ShimmerText>
      <ShimmerText textType="button"></ShimmerText>
    </ShimmerContainer>
  );
};

const ShimmerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

const templates = {
  "Instagram Post": css`
    height: 500px;
    width: 500px;
  `,
  "Twitter Header": css`
    height: 500px;
    width: 1500px;
  `,
  Story: css`
    height: 1920px;
    width: 1080px;
  `,
};

const textTypes = {
  title: css`
    width: 500px;
  `,
  button: css`
    width: 100px;
  `,
};

const ShimmerImage = styled.div<ShimmerProps>`
  border: none;
  border-radius: 15px;
  background-color: black;
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;

  @keyframes pulse {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }
  ${({ template }) => templates[template!]}
`;

const ShimmerText = styled.div<textTypeProps>`
  border: none;
  border-radius: 15px;
  height: 37px;
  margin: 10px;
  background-color: black;
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;

  @keyframes pulse {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }
  ${({ textType }) => textTypes[textType]}
`;
