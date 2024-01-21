import { FC, useContext } from "react";
import { Button } from "./Button/Button";
import { Input } from "./Input/Input";
import styled from "styled-components";
import { useRef } from "react";
import { TemplateContext } from "../App";

export const GenerateTemplate: FC = () => {
  const { template } = useContext(TemplateContext);
  const input = useRef<HTMLInputElement>(null);
  const handleClick = () => {
    console.log(input.current.value);
    console.log(template);
  };
  return (
    <GenerateContainer>
      <Input
        inputRef={input}
        placeholder="Enter your company description"
      ></Input>
      <Button text="Generate" onClick={handleClick} />
    </GenerateContainer>
  );
};

const GenerateContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
