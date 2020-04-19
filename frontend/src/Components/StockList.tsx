import React from "react";
import styled from "styled-components/macro";
import { StockCard } from "./StockCard";
import { StockModel } from "../models";
import { useStocksStore } from "../Store/stocksStore";

export const StocksList: React.FC<any> = ({}) => {
  const stocksStore = useStocksStore();
  const StockItems = stocksStore.stocks.map((stock: StockModel, index) => (
    <StockCard key={index} {...stock} />
  ));
  // const PlaceItems = [
  //   <PlacesListItem key="1" />,
  //   <PlacesListItem key="2" isClosed />,
  //   <PlacesListItem key="3" />,
  //   <PlacesListItem key="4" />,
  // ];
  return <Root>{StockItems}</Root>;
};

const Root = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 30px;
  padding: 20px;
`;
