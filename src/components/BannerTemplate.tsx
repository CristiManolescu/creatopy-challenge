import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { Button } from "./Button/Button";
import { ShimmerUI } from "./ShimmerUI";
import { Image } from "./Image/Image";

interface BannerTemplateProps {
  image: string;
  template: "Instagram Post" | "Twitter Header" | "Story";
  response: string;
}

export const BannerTemplate: FC<BannerTemplateProps> = ({
  image,
  template,
  response,
}) => {
  const [title, setTitle] = useState<string>(null);
  const [description, setDescription] = useState<string>(null);
  const [cta, setCta] = useState<string>(null);

  useEffect(() => {
    setData();
  }, []);

  const setData = () => {
    const array = response.split(",");
    setTitle(array[0]);
    setDescription(array[1]);
    setCta(array[2]);
  };

  return (
    <BannerPage>
      {image ? (
        <>
          <Image src={image} alt="logo" kind={template} />
          <h1>
            {title} - {description}
          </h1>
          <Button text={cta} />
        </>
      ) : (
        <ShimmerUI template={template} />
      )}
    </BannerPage>
  );
};

const BannerPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
