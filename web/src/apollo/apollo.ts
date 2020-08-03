import { ApolloClient, InMemoryCache } from "@apollo/react-hooks";

export const client = new ApolloClient({
	cache: new InMemoryCache(),
	uri: "http://localhost:3500/graphql",
	credentials: "include"
});
