const { makeExecutableSchema } = require("graphql-tools");
const resolvers = require("./resolvers");

const typeDefs = `
  type User {
    id: Int!
    username: String!
    email: String!
  }
  type Query {
    me: User
  }
  type Mutation {
    signup (username: String!, email: String!, password: String!): String
    login (email: String!, password: String!): String
  }
`;

module.exports = makeExecutableSchema({ typeDefs, resolvers });
