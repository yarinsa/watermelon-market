//add gql function
export const stockTypes = `
  type Stock {
    symbol: String
    open: String
    high: String
    low: String
    price: String
    volume: String
    latestTradingDay: String
    previousClose: String
    change: String
    changePercent: String
  }

  type StockH {
    symbol: String
    name: String
    price: String
    change: String
    changePercent: String
    interdayData: [interdayData]
  }

  type interdayData {
    time: String
    close: Float
  }

  type NewsArticle {
      source: String,
      author: String,
      title: String,
      description:String,
      url: String,
      urlToImage: String,
      publishedAt: String,
      content: String
  }

  type SearchResult {
    symbol: String,
    name: String,
    type: String,
    region: String,
    matchScore: String
  }

`;

export const stockQuery = `

stocks(symbol: String!): [Stock]
stock(symbol: String!): StockH
newsBySymbol(symbol: String!): [NewsArticle]
searchByQuery(query: String!): [SearchResult]
`;
