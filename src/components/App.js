import React from "react";
import { ApolloProvider } from "@apollo/client";
import client from "../Config/gql_Config";
import Students from "./Students";

function App() {
  return (
    <ApolloProvider client={client}>
      <Students />
    </ApolloProvider>
  );
}

export default App;
