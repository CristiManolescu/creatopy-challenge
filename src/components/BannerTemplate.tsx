import { FC, useEffect, useState } from "react";
import { bannerTemplates } from "../utils/data";
import styled from "styled-components";
import { Button } from "./Button/Button";

interface BannerTemplateProps {
  image: string;
  template: string;
  response: string;
}

export const BannerTemplate: FC<BannerTemplateProps> = ({
  image,
  template,
  response,
}) => {
  const [height, setHeight] = useState<number>(0);
  const [width, setWeight] = useState<number>(0);
  const [title, setTitle] = useState<string>(null);
  const [description, setDescription] = useState<string>(null);
  const [cta, setCta] = useState<string>(null);

  useEffect(() => {
    setData();
  }, []);

  const setData = () => {
    const findSize = bannerTemplates.find((item) => item.name === template);
    setHeight(findSize.height);
    setWeight(findSize.width);
    const array = response.split(",");
    setTitle(array[0]);
    setDescription(array[1]);
    setCta(array[2]);
  };

  return (
    <BannerPage>
      <img src={image} alt="logo" width={width} height={height} />
      <h1>
        {title} - {description}
      </h1>
      <Button text={cta} />
    </BannerPage>
  );
};

const BannerPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
