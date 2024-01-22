import { FC, useContext, useState, useRef } from "react";
import { TemplateContext } from "../App";
import styled from "styled-components";

import { Button } from "./Button/Button";
import { Input } from "./Input/Input";
import { BannerTemplate } from "./BannerTemplate";

import openai from "../utils/openai";

export const GenerateTemplate: FC = () => {
  const { template } = useContext(TemplateContext);
  const [imageUrl, setImageUrl] = useState<string>(null);
  const [response, setResponse] = useState<string>(null);
  // const [requestSize, setRequestSize] = useState<
  //   "1792x1024" | "1024x1792" | "1024x1024"
  // >("1024x1024");
  const [isGenerated, setIsGenerated] = useState<boolean>(false);
  const input = useRef<HTMLInputElement>(null);
  const handleClick = () => {
    fetchImage();
    fetchText();
  };

  const fetchImage = async () => {
    let requestSize = imageSize();
    console.log(requestSize);
    const imageResult = await openai.images.generate({
      model: "dall-e-3",
      prompt: input.current.value,
      size: requestSize,
      quality: "standard",
      n: 1,
    });

    setImageUrl(imageResult?.data[0]?.url);
    imageResult?.data[0]?.url ? setIsGenerated(true) : setIsGenerated(false);
  };

  const fetchText = async () => {
    const textQuery = `Create a text based on the following description: ${input.current.value}. First part of it will be the name of the company, the second will be the description of the company with maximum of 100 characters and the third will be a call to action text that should be something short like "Order now!", "Try" "Download" or "Swipe up". Your Response SHOULD look like this: The Cat Frame, Best cat frames, Buy now!. Every text should be splitted by a comma.`;

    const textResult = await openai.chat.completions.create({
      messages: [{ role: "user", content: textQuery }],
      model: "gpt-3.5-turbo",
    });

    setResponse(textResult?.choices[0]?.message?.content);
    textResult?.choices[0]?.message?.content
      ? setIsGenerated(true)
      : setIsGenerated(false);
  };

  const imageSize = () => {
    let requestSize: "1792x1024" | "1024x1792" | "1024x1024";
    if (template === "Instagram Post") requestSize = "1024x1024";
    if (template === "Twitter Header") requestSize = "1792x1024";
    if (template === "Instagram Post") requestSize = "1024x1792";
    return requestSize;
  };

  return (
    <GenerateContainer>
      {isGenerated ? (
        <BannerTemplate
          template={template}
          image={imageUrl}
          response={response}
        />
      ) : (
        <>
          <Input
            inputRef={input}
            placeholder="Enter your company description"
          ></Input>
          <Button text="Generate" onClick={handleClick} />
        </>
      )}
    </GenerateContainer>
  );
};

const GenerateContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
