import { FC, useState } from "react";
import styled from "styled-components";
import { TemplatePick } from "./components/TemplatePick";
import { GenerateTemplate } from "./components/GenerateTemplate";

export const App: FC = () => {
  const [picked, setPicked] = useState<boolean>(false);
  return (
    <Main>
      {picked ? (
        <GenerateTemplate />
      ) : (
        <TemplatePick setPicked={() => setPicked(true)} />
      )}
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
