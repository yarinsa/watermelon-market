export const userTypes = `
    type User {
        name: String,
         }
`;

export const userQuery = `
extend type Query {

    users: [User]
}
`;
// export default typeDefs;
