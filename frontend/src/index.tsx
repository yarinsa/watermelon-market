import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { usePlacesStore } from "./Store/placesStore";
import { Provider } from "mobx-react";
import { ApolloClient } from "apollo-client";
import { ApolloProvider } from "@apollo/react-hooks";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: "http://localhost:3030/graphql",
  // uri: "http://172.20.10.4:3030/graphql", // FOR IPGONE DEBUGGING
});

const client = new ApolloClient({
  cache,
  link,
});
const stores = {
  usePlacesStore,
};

ReactDOM.render(
  <Provider {...stores}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Provider>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
