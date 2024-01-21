import { FC, useContext, useEffect } from "react";
import { Button } from "./Button/Button";
import { Input } from "./Input/Input";
import styled from "styled-components";
import { useRef } from "react";
import { TemplateContext } from "../App";
import { ImageGenerateLink, OPENAI_KEY, bannerTemplates } from "../utils/data";
import openai from "../utils/openai";

export const GenerateTemplate: FC = () => {
  const { template } = useContext(TemplateContext);
  const input = useRef<HTMLInputElement>(null);
  const handleClick = () => {
    console.log(findSize.size);
  };

  const findSize = bannerTemplates.find((template) => template.name);

  const fetchImage = async () => {
    const data = await fetch(ImageGenerateLink, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${OPENAI_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "dall-e-3",
        prompt: "A cute baby sea otter",
        n: 1,
        size: findSize.size,
      }),
    });
    const json = await data.json();
  };

  const fetchText = async () => {
    const textQuery = `cerinta chat`;

    const textResult = await openai.chat.completions.create({
      messages: [{ role: "user", content: textQuery }],
      model: "gpt-3.5-turbo",
    });

    console.log(textResult.choices[0].message.content);
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
