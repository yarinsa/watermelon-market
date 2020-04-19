import stockResolvers from "./stock/resolvers";
import userResolvers from "./user/resolvers";
const Query = {
  ...stockResolvers.Queries,
  ...userResolvers.Queries,
};
const resolvers = {
  Query: { ...Query },
};

export default resolvers;

// export default resolvers;
