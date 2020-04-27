import { importSchema } from "graphql-import";
import { resolvers } from "./resolvers";
import { ApolloServer } from "apollo-server-express";
import { StocksApi } from "./api.service";
import { SearchApi } from "./search.api.service";
const typeDefs = importSchema("./schema.generated.graphql");

export interface MyContext {
  stockApi: StocksApi;
}

export const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  introspection: true,
  dataSources: () => {
    return {
      stocksApi: new StocksApi(),
      searchApi: new SearchApi(),
    };
  },
});
