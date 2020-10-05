const { ApolloServer, gql } = require("apollo-server");

const students = [
  {
    id: "1",
    name: "Ali",
    email: "ali@hmail.com",
    age: 21,
  },
  {
    id: "2",
    name: "Hasan",
    email: "Hasan@hmail.com",
    age: 23,
  },
  {
    id: "3",
    name: "MUsa",
    email: "MUsa@hmail.com",
    age: 22,
  },
];

const resolvers = {
  Query: {
    students: () => students,
  },
};

const typeDefs = gql`
  type Student {
    id: Int
    name: String
    email: String
    age: Int
  }
  type Query {
    students: [Student]
  }
`;

const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
