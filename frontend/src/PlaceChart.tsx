import React, { ReactComponentElement, ReactSVGElement } from "react";
import styled from "styled-components/macro";
import { Spinner, Colors } from "@blueprintjs/core";

interface PlaceChartProps {
  Icon: React.FunctionComponent;
  value: number;
}
export const PlaceChart: React.FC<PlaceChartProps> = ({ Icon, value }) => {
  return (
    <ChartContainer>
      <Spinner value={value} intent="warning" />
      <ChartIcon>
        <Icon />
      </ChartIcon>
    </ChartContainer>
  );
};

const ChartContainer = styled.div`
  position: relative;
  margin: 5px;
`;

const ChartIcon = styled.div`
  position: absolute;
  top: 17px;
  right: 17px;
  svg {
    width: 16px;
    height: 16px;
  }

  path {
    fill: ${Colors.ORANGE3};
  }
`;
