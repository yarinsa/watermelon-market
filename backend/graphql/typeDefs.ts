import { stockTypes, stockQuery } from "./stock/types";
import { userTypes, userQuery } from "./user/types";

const queryType = `type Query {
    ${stockQuery}
} `;
export const typeDefs = userQuery + queryType + stockTypes + userTypes;

// export default typeDefs;
