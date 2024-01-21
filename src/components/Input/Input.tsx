import { FC, HTMLInputTypeAttribute, MutableRefObject } from "react";
import styled from "styled-components";

interface InputProps {
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  inputRef?: MutableRefObject<HTMLInputElement>;
}

export const Input: FC<InputProps> = ({
  type = "text",
  placeholder,
  inputRef,
}) => {
  return (
    <InputContainer placeholder={placeholder} ref={inputRef}></InputContainer>
  );
};

const InputContainer = styled.input`
  padding: 8px;
  margin: 8px;
  border: none;
  border-radius: 15px;
  font-size: 18px;
  font-weight: 400;
`;
