import { FC, useState, createContext } from "react";
import styled from "styled-components";

import { TemplatePick } from "./components/TemplatePick";
import { GenerateTemplate } from "./components/GenerateTemplate";

export const TemplateContext = createContext(null);

export const App: FC = () => {
  const [picked, setPicked] = useState<boolean>(false);
  const [template, setTemplate] = useState<string>(null);
  return (
    <Main>
      <img src="/creatopy-logo.png" alt="logo" width={250} />
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #d3d3d3;
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  height: 100%;
`;
