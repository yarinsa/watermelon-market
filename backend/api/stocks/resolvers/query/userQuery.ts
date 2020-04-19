// import { Context } from "../../utils";
// import { QueryUserArgs } from "../../generated/types";

const stockQuery = {
  stockCard: (symbol: string) => {
    console.log(symbol);
    return {
      id: "222",
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
    };
  },
};

export default stockQuery;
