import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ApolloProvider } from "@apollo/client";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { SnackbarProvider } from "notistack";
import { UserProvider } from "./providers/UserProvider";
import { HelmetProvider } from "react-helmet-async";

const client = new ApolloClient({
  uri: `${process.env.REACT_APP_SERVER_URI}/graphql`, // Replace with your GraphQL endpoint
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <UserProvider>
        <SnackbarProvider maxSnack={3}>
          <ApolloProvider client={client}>
            <App />
          </ApolloProvider>
        </SnackbarProvider>
      </UserProvider>
    </HelmetProvider>
  </React.StrictMode>
);
