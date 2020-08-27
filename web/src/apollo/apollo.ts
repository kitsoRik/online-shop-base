import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
	cache: new InMemoryCache({}),
	uri: "http://localhost:3500/graphql",
	credentials: "include",
	connectToDevTools: true
});
