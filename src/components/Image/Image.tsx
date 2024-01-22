import { FC } from "react";
import styled, { css } from "styled-components";

interface ImageProps {
  kind?: "Instagram Post" | "Twitter Header" | "Story";
  src: string;
  alt: string;
}

export const Image: FC<ImageProps> = ({ kind, src, alt }) => {
  return <ImageContainer kind={kind} src={src} alt={alt} />;
};

const kinds = {
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

const ImageContainer = styled.img<ImageProps>`
  border: none;
  border-radius: 15px;
  ${({ kind }) => kinds[kind!]}
`;
