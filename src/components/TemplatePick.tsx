import { FC, SetStateAction, useContext } from "react";
import { bannerTemplates } from "../utils/data";
import styled from "styled-components";
import { Button } from "./Button/Button";
import { TemplateContext } from "../App";

interface TemplatePickProps {
  setPicked: React.Dispatch<SetStateAction<boolean>>;
}

export const TemplatePick: FC<TemplatePickProps> = ({ setPicked }) => {
  const { setTemplate } = useContext(TemplateContext);

  return (
    <div>
      <h1>{`Pick your favorite template`}</h1>
      <Buttons>
        {bannerTemplates.map((template) => (
          <Button
            key={template.name}
            onClick={() => {
              setPicked(true);
              setTemplate(template.name);
            }}
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
