import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components/macro";
import { QuoteTabs } from "./QuoteTabs";

export const QuoteDetails: React.FC<{}> = ({}) => {
  let { symbol } = useParams();
  console.log(symbol);
  return (
    <Root>
      {symbol && <QuoteTabs symbol={symbol} />}
      Hello
      <h1>Heloo!</h1>
      <h1>{symbol}</h1>
    </Root>
  );
};

const Root = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  min-height: 100vh;
`;
