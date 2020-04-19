import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as HomeHeader } from "./assets/main-background.svg";
import { mediaQueries } from "./theme";
import { StocksList } from "./Components/StockList";
import { NewsList } from "./Components/NewsList";
import { InputGroup, MenuItem } from "@blueprintjs/core";
import { Suggest } from "@blueprintjs/select";
import stockModel from "./models/StockModel";
import { Search } from "./Search";

export const Home: React.FC<any> = ({}) => {
  return (
    <Root>
      <HomeTitle></HomeTitle>
      <GraphBackground />
      <Content>
        <Search />
        <StocksList />
        <NewsList />
      </Content>
    </Root>
  );
};

const Root = styled.section``;

const GraphBackground = styled(HomeHeader)`
  width: 100vw;
  position: absolute;
  top: 0;
  max-height: 480px;
  z-index: -1;
  @media (max-width: ${mediaQueries.phone}) {
    max-height: 400px;
  }
`;

const HomeTitle = styled.h1`
  color: white;
`;

const Content = styled.div`
  margin-top: 350px;
  padding: 20px;
`;
