import {
  symbolSearch,
  querySymbol,
  symbolInterday,
} from "../../services/alphaVentage.service";
import { getNewsBySymbol } from "../../services/newsApi.service";

const stocksList = [
  {
    symbol: "TSLA",
    open: "777.8700",
    high: "789.7500",
    low: "770.7700",
    price: "771.8426",
    volume: "6995867",
    latestTradingDay: "2020-02-12",
    previousClose: "774.3800",
    change: "-2.5374",
    changePercent: "-0.3277%",
  },
  {
    symbol: "TSLA",
    open: "777.8700",
    high: "789.7500",
    low: "770.7700",
    price: "771.8426",
    volume: "6995867",
    latestTradingDay: "2020-02-12",
    previousClose: "774.3800",
    change: "-2.5374",
    changePercent: "-0.3277%",
  },
];

// const stocks = (args) => {
//   console.log(args);
//   return stocksList;
// };
async function stocks(
  parent: any,
  args: { symbol: any },
  context: any,
  info: any
) {
  const symbol = args.symbol;
  console.log(symbol);
  return stocksList.filter((stock) => stock.symbol === symbol);
}

async function stock(
  parent: any,
  args: { symbol: any },
  context: any,
  info: any
) {
  const symbol = args.symbol;
  try {
    const symbolSearchResults = await symbolSearch(symbol);
    const symbolQuery = await querySymbol(symbolSearchResults[0].symbol);
    const symbolInterdayData = await symbolInterday(
      symbolSearchResults[0].symbol
    );
    if (symbolQuery) {
      return {
        symbol: symbolQuery.symbol,
        name: symbolSearchResults[0].name,
        price: symbolQuery.price,
        change: symbolQuery.change,
        changePercent: symbolQuery.changePercent,
        interdayData: symbolInterdayData,
      };
    }
  } catch (error) {
    console.log(error);
  }
}

async function newsBySymbol(
  parent: any,
  args: { symbol: any },
  context: any,
  info: any
) {
  const symbol = args.symbol;
  return await getNewsBySymbol(symbol);
}

async function searchByQuery(
  parent: any,
  args: { query: string },
  context: any,
  info: any
) {
  try {
    const query = args.query;
    console.log(query);
    return await symbolSearch(query);
  } catch (error) {
    console.log(error);
  }
}

export default {
  Queries: {
    stocks,
    stock,
    newsBySymbol,
    searchByQuery,
  },
  Mutations: {},
};
