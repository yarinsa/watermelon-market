import fetch from "node-fetch";
const API_KEY = "RXVQ30PJTRMXC0TJ";
import algotrader from "algotrader";
const AlphaVantage = algotrader.Data.AlphaVantage;
const News = algotrader.Data.News;
const av = new AlphaVantage("RXVQ30PJTRMXC0TJ");

export async function symbolSearch(keywords) {
  //www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=BA&apikey=demo
  https: try {
    const url = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${keywords}&apikey=${API_KEY}`;
    console.log(url);
    const result = await (await fetch(url)).json();
    console.log("result", result);
    return result["bestMatches"].map((stock) => {
      return {
        symbol: stock["1. symbol"],
        name: stock["2. name"],
        type: stock["3. type"],
        region: stock["4. region"],
        matchScore: stock["9. matchScore"],
      };
    });
  } catch (error) {
    console.log(error);
  }
}
export async function querySymbol(symbol) {
  try {
    const blabla = av.timeSeriesIntraday("AAPL", "1min").then((array) => {
      // Returns an array of Quote objects for every minute since market open
      array.forEach((quote) => {
        console.log(quote.getOpen()); // 174.78
        console.log(quote.getVolume()); // 13523
      });
    });

    const news = await News.getFromYahoo("AAPL");
    console.log(news);
    const url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}`;
    const result = await (await fetch(url)).json();
    const resultObject = result["Global Quote"];
    return {
      symbol: resultObject["01. symbol"],
      open: resultObject["02. open"],
      high: resultObject["03. high"],
      low: resultObject["04. low"],
      price: resultObject["05. price"],
      volume: resultObject["06. volume"],
      latestTradingDay: resultObject["07. latest trading day"],
      previousClose: resultObject["08. previous close"],
      change: resultObject["09. change"],
      changePercent: resultObject["10. change percent"],
    };
  } catch (error) {
    console.log(error);
  }
}

export async function symbolInterday(symbol) {
  try {
    const url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=${API_KEY}`;
    const result = await (await fetch(url)).json();
    const resultObject = result["Time Series (5min)"];

    return Object.keys(resultObject).map((key) => {
      return {
        time: key,
        close: parseFloat(resultObject[key]["4. close"]),
      };
    });
  } catch (error) {
    console.log(error);
  }
}

export const alphavantageService = {
  symbolSearch,
  querySymbol,
  symbolInterday,
};
