import { FC, SetStateAction } from "react";
import { bannerTemplates } from "../utils/data";
import styled from "styled-components";
import { Button } from "./Button/Button";

interface TemplatePickProps {
  setPicked: React.Dispatch<SetStateAction<boolean>>;
}

export const TemplatePick: FC<TemplatePickProps> = ({ setPicked }) => {
  const handleClick = () => {
    setPicked(true);
    console.log("test");
  };
  return (
    <div>
      <h1>{`Pick your favorite template`}</h1>
      <Buttons>
        {bannerTemplates.map((template) => (
          <Button
            key={template.name}
            onClick={handleClick}
            text={template.name}
          />
        ))}
      </Buttons>
    </div>
  );
};

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
