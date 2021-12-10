import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./pages/App";
import { WebSocketLink } from "@apollo/client/link/ws";
import reportWebVitals from "./config/reportWebVitals";

import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    HttpLink, split,
} from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";

const httpLink = new HttpLink({
    uri: "http://localhost:4000/graphql",
});

const wsLink = new WebSocketLink({
    uri: "ws://localhost:4000/graphql",
    options: {
        reconnect: true,
    },
});

const splitLink = split(
    ({ query }) => {
        const definition = getMainDefinition(query);
        return (
            definition.kind === "OperationDefinition" &&
            definition.operation === "subscription"
        );
    },
    wsLink,
    httpLink,
);

const client = new ApolloClient({
    link: splitLink,
    cache: new InMemoryCache(),
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
    document.getElementById("root"),
);

reportWebVitals();
