import { FC, MouseEventHandler } from "react";
import styled from "styled-components";

export interface ButtonProps {
  onClick?: MouseEventHandler;
  text: string;
}

export const Button: FC<ButtonProps> = ({ onClick, text }) => {
  return <ButtonContainer onClick={onClick}>{text}</ButtonContainer>;
};

const ButtonContainer = styled.button<ButtonProps>`
  padding: 8px;
  margin: 8px;
  outline: none;
  border: none;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: 400;
  cursor: pointer;
`;
