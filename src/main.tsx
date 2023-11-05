import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
} from "@apollo/client";

import "./index.css";

const API_URL = "https://api.platform.opentargets.org/api/v4/graphql";
const client = new ApolloClient({
  uri: API_URL,
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
