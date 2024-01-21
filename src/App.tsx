import { FC, useState } from "react";
import styled from "styled-components";
import { TemplatePick } from "./components/TemplatePick";
import { GenerateTemplate } from "./components/GenerateTemplate";
import * as React from "react";

export const TemplateContext = React.createContext(null);

export const App: FC = () => {
  const [picked, setPicked] = useState<boolean>(false);
  const [template, setTemplate] = useState<string>(null);
  return (
    <Main>
      <TemplateContext.Provider
        value={{ template: template, setTemplate: setTemplate }}
      >
        {picked ? (
          <GenerateTemplate />
        ) : (
          <TemplatePick setPicked={() => setPicked(true)} />
        )}
      </TemplateContext.Provider>
    </Main>
  );
};

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d3d3d3;
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
`;
