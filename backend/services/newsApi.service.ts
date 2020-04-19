import fetch from "node-fetch";
import algotrader from "algotrader";
const News = algotrader.Data.News;
const API_KEY = "19cb92af52964030a01fab5737325e89";

export const getNewsBySymbol = async (symbol: string) => {
  try {
    const url = `https://newsapi.org/v2/everything?q=${symbol}&apiKey=${API_KEY}`;
    const result = await (await fetch(url)).json();
    return result.articles.map((article) => {
      return {
        source: article.source.name,
        author: article.author,
        title: article.title.split(" ").slice(0, -1).join(" "),
        description: article.description,
        url: article.url,
        urlToImage: article.urlToImage,
        publishedAt: article.publishedAt,
        content: article.content,
      };
    });
  } catch (error) {
    console.log(error);
  }
};
