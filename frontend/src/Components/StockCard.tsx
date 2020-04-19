import React, { useEffect, useState } from "react";
import { Card, Elevation, Icon, Spinner, Colors } from "@blueprintjs/core";
import styled from "styled-components/macro";
import { StockModel } from "../models";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { ReactComponent as Loader } from "../assets/stock-loader.svg";
import { Area, AreaChart } from "recharts";
interface StockCardProps extends StockModel {}

interface Stock {
  symbol: string;
  name: string;
  price: string;
  change: string;
  changePercent: string;
  interdayData: interdayDataInterface[];
}

interface interdayDataInterface {
  time: string;
  close: number;
}

export const StockCard: React.FC<StockCardProps> = ({
  symbol,
  open,
  high,
  low,
  price,
  volume,
  latestTradingDay,
  previousClose,
  change,
  changePercent,
}) => {
  //ENABLE WHEN DONE DEV
  // const { data, loading, error } = useQuery(GET_STOCK);

  //FOR SIMULATING OFFLINE
  const data = {
    stock: {
      symbol: "TQQQ",
      name: "ProShares UltraPro QQQ",
      price: "65.1000",
      change: "3.3100",
      changePercent: "5.3569%",
      interdayData: [
        {
          time: "2020-04-16 16:00:00",
          close: 65.17,
        },
        {
          time: "2020-04-16 15:55:00",
          close: 65.58,
        },
        {
          time: "2020-04-16 15:50:00",
          close: 64.52,
        },
        {
          time: "2020-04-16 15:45:00",
          close: 64.66,
        },
        {
          time: "2020-04-16 15:40:00",
          close: 64.8801,
        },
        {
          time: "2020-04-16 15:35:00",
          close: 64.825,
        },
        {
          time: "2020-04-16 15:30:00",
          close: 64.45,
        },
        {
          time: "2020-04-16 15:25:00",
          close: 64.085,
        },
        {
          time: "2020-04-16 15:20:00",
          close: 63.76,
        },
        {
          time: "2020-04-16 15:15:00",
          close: 63.88,
        },
        {
          time: "2020-04-16 15:10:00",
          close: 63.79,
        },
        {
          time: "2020-04-16 15:05:00",
          close: 63.92,
        },
        {
          time: "2020-04-16 15:00:00",
          close: 64.3,
        },
        {
          time: "2020-04-16 14:55:00",
          close: 64.198,
        },
        {
          time: "2020-04-16 14:50:00",
          close: 64.0901,
        },
        {
          time: "2020-04-16 14:45:00",
          close: 64.47,
        },
        {
          time: "2020-04-16 14:40:00",
          close: 64.55,
        },
        {
          time: "2020-04-16 14:35:00",
          close: 64.15,
        },
        {
          time: "2020-04-16 14:30:00",
          close: 63.9601,
        },
        {
          time: "2020-04-16 14:25:00",
          close: 63.63,
        },
        {
          time: "2020-04-16 14:20:00",
          close: 63.92,
        },
        {
          time: "2020-04-16 14:15:00",
          close: 63.9905,
        },
        {
          time: "2020-04-16 14:10:00",
          close: 63.8365,
        },
        {
          time: "2020-04-16 14:05:00",
          close: 63.44,
        },
        {
          time: "2020-04-16 14:00:00",
          close: 63.49,
        },
        {
          time: "2020-04-16 13:55:00",
          close: 63.43,
        },
        {
          time: "2020-04-16 13:50:00",
          close: 63.83,
        },
        {
          time: "2020-04-16 13:45:00",
          close: 64.1,
        },
        {
          time: "2020-04-16 13:40:00",
          close: 63.8,
        },
        {
          time: "2020-04-16 13:35:00",
          close: 63.9556,
        },
        {
          time: "2020-04-16 13:30:00",
          close: 63.71,
        },
        {
          time: "2020-04-16 13:25:00",
          close: 63.46,
        },
        {
          time: "2020-04-16 13:20:00",
          close: 63.58,
        },
        {
          time: "2020-04-16 13:15:00",
          close: 63.49,
        },
        {
          time: "2020-04-16 13:10:00",
          close: 63.3,
        },
        {
          time: "2020-04-16 13:05:00",
          close: 63.3,
        },
        {
          time: "2020-04-16 13:00:00",
          close: 63.48,
        },
        {
          time: "2020-04-16 12:55:00",
          close: 63.4,
        },
        {
          time: "2020-04-16 12:50:00",
          close: 63.29,
        },
        {
          time: "2020-04-16 12:45:00",
          close: 63.2023,
        },
        {
          time: "2020-04-16 12:40:00",
          close: 62.78,
        },
        {
          time: "2020-04-16 12:35:00",
          close: 62.6599,
        },
        {
          time: "2020-04-16 12:30:00",
          close: 63.69,
        },
        {
          time: "2020-04-16 12:25:00",
          close: 63.66,
        },
        {
          time: "2020-04-16 12:20:00",
          close: 63.9365,
        },
        {
          time: "2020-04-16 12:15:00",
          close: 64.5685,
        },
        {
          time: "2020-04-16 12:10:00",
          close: 64.91,
        },
        {
          time: "2020-04-16 12:05:00",
          close: 65.49,
        },
        {
          time: "2020-04-16 12:00:00",
          close: 65.83,
        },
        {
          time: "2020-04-16 11:55:00",
          close: 65.9001,
        },
        {
          time: "2020-04-16 11:50:00",
          close: 65.09,
        },
        {
          time: "2020-04-16 11:45:00",
          close: 65.4,
        },
        {
          time: "2020-04-16 11:40:00",
          close: 65.26,
        },
        {
          time: "2020-04-16 11:35:00",
          close: 65.05,
        },
        {
          time: "2020-04-16 11:30:00",
          close: 65.4343,
        },
        {
          time: "2020-04-16 11:25:00",
          close: 65.335,
        },
        {
          time: "2020-04-16 11:20:00",
          close: 65.1099,
        },
        {
          time: "2020-04-16 11:15:00",
          close: 64.61,
        },
        {
          time: "2020-04-16 11:10:00",
          close: 64.6,
        },
        {
          time: "2020-04-16 11:05:00",
          close: 64.36,
        },
        {
          time: "2020-04-16 11:00:00",
          close: 64.41,
        },
        {
          time: "2020-04-16 10:55:00",
          close: 63.96,
        },
        {
          time: "2020-04-16 10:50:00",
          close: 64.23,
        },
        {
          time: "2020-04-16 10:45:00",
          close: 64.09,
        },
        {
          time: "2020-04-16 10:40:00",
          close: 63.18,
        },
        {
          time: "2020-04-16 10:35:00",
          close: 63.4249,
        },
        {
          time: "2020-04-16 10:30:00",
          close: 63.48,
        },
        {
          time: "2020-04-16 10:25:00",
          close: 63.215,
        },
        {
          time: "2020-04-16 10:20:00",
          close: 62.74,
        },
        {
          time: "2020-04-16 10:15:00",
          close: 62.21,
        },
        {
          time: "2020-04-16 10:10:00",
          close: 62.6,
        },
        {
          time: "2020-04-16 10:05:00",
          close: 62.24,
        },
        {
          time: "2020-04-16 10:00:00",
          close: 63.02,
        },
        {
          time: "2020-04-16 09:55:00",
          close: 63.36,
        },
        {
          time: "2020-04-16 09:50:00",
          close: 63.46,
        },
        {
          time: "2020-04-16 09:45:00",
          close: 63.6299,
        },
        {
          time: "2020-04-16 09:40:00",
          close: 63.32,
        },
        {
          time: "2020-04-16 09:35:00",
          close: 63.64,
        },
        {
          time: "2020-04-15 16:00:00",
          close: 61.73,
        },
        {
          time: "2020-04-15 15:55:00",
          close: 61.4,
        },
        {
          time: "2020-04-15 15:50:00",
          close: 62.07,
        },
        {
          time: "2020-04-15 15:45:00",
          close: 61.99,
        },
        {
          time: "2020-04-15 15:40:00",
          close: 62.14,
        },
        {
          time: "2020-04-15 15:35:00",
          close: 62.02,
        },
        {
          time: "2020-04-15 15:30:00",
          close: 62.2399,
        },
        {
          time: "2020-04-15 15:25:00",
          close: 62.6001,
        },
        {
          time: "2020-04-15 15:20:00",
          close: 62.735,
        },
        {
          time: "2020-04-15 15:15:00",
          close: 62.41,
        },
        {
          time: "2020-04-15 15:10:00",
          close: 62.575,
        },
        {
          time: "2020-04-15 15:05:00",
          close: 62.92,
        },
        {
          time: "2020-04-15 15:00:00",
          close: 63.18,
        },
        {
          time: "2020-04-15 14:55:00",
          close: 62.64,
        },
        {
          time: "2020-04-15 14:50:00",
          close: 62.87,
        },
        {
          time: "2020-04-15 14:45:00",
          close: 62.77,
        },
        {
          time: "2020-04-15 14:40:00",
          close: 62.81,
        },
        {
          time: "2020-04-15 14:35:00",
          close: 62.51,
        },
        {
          time: "2020-04-15 14:30:00",
          close: 62.585,
        },
        {
          time: "2020-04-15 14:25:00",
          close: 62.57,
        },
        {
          time: "2020-04-15 14:20:00",
          close: 62.39,
        },
        {
          time: "2020-04-15 14:15:00",
          close: 62.2,
        },
      ],
    },
  };

  const fixedPrice = (price: string) => {
    return parseFloat(price).toFixed(3);
  };
  const fixedPercentage = (percentage: string) => {
    const percentageNumber = percentage.substring(0, percentage.length - 1);
    return parseFloat(percentageNumber).toFixed(3);
  };
  //TODO: get types from graph QL and implant it.
  const interdayDataToChart = (interdayDataFromServer: any) => {
    return interdayDataFromServer.map((record: any) => {
      return {
        time: record.time,
        close: record.close,
      };
    });
  };

  return (
    <Root interactive={true} elevation={Elevation.TWO}>
      <RootLink to={`/stock/TQQQ`}>
        {data && (
          <Content>
            <Symbol>{data.stock.symbol}</Symbol>
            <Name>{data.stock.name}</Name>
            {/* <Price>{fixedPrice(data.stock.price)}</Price>
            <Change>
              {fixedPrice(data.stock.change)}(
              {fixedPercentage(data.stock.changePercent)}%)
            </Change> */}
          </Content>
        )}
        {data && (
          <AreaChartStyled
            height={250}
            width={700}
            data={interdayDataToChart(data.stock.interdayData)}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
            </defs>
            <Area
              type="monotone"
              dataKey="close"
              stroke="#8884d8"
              fillOpacity={1}
              fill="url(#colorUv)"
            />
          </AreaChartStyled>
        )}
        {/* {loading && (
          <Content>
            <Loader fill="#3f1184" />
          </Content>
        )} */}
      </RootLink>
    </Root>
  );
};

//STYLED COMPONENTS
const Root = styled(Card)`
  display: flex;
  padding: 0 !important;
  overflow: hidden;
`;

const RootLink = styled(Link)`
  color: inherit;
  :hover {
    color: inherit;
  }
`;

const Content = styled.div`
  padding-left: 20px;
  padding-top: 20px;
`;
const Symbol = styled.h1`
  margin: 0;
`;

const Name = styled.span`
  display: block;
`;

const Price = styled.span``;
const Change = styled.span``;

const AreaChartStyled = styled(AreaChart)`
  margin-left: -5px;
`;
//GRAPHQL
const GET_STOCK = gql`
  {
    stock(symbol: "TQQQ") {
      symbol
      name
      price
      change
      changePercent
      interdayData {
        time
        close
      }
    }
  }
`;
