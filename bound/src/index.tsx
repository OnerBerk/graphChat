import React from "react";
import ReactDOM from "react-dom";
import { WebSocketLink } from "@apollo/client/link/ws";
import { getMainDefinition } from "@apollo/client/utilities";
import { setContext } from "@apollo/client/link/context";
import reportWebVitals from "./config/reportWebVitals";
import App from "./pages/App";
import "./index.css";
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    HttpLink, split,
} from "@apollo/client";

const httpLink = new HttpLink({
    uri: "http://localhost:4000/graphql",
});

const stringtoken = localStorage.getItem('chat-auth')
const token = stringtoken && stringtoken.replace(/(^"|"$)/g, '')
const wsLink = new WebSocketLink({
    uri: "ws://localhost:4000/graphql",
    options: {
        reconnect: true,
        connectionParams: {
            authToken: token,
        },
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

const authLink = setContext((_,{headers})=>{
    return{
        headers:{
            ...headers,
            authorization:token ? token : ""
        }
    }
})

const client = new ApolloClient({
    link: authLink.concat(splitLink),
    cache: new InMemoryCache()
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
    document.getElementById("root"),
);

reportWebVitals();
