import { ApolloClient, InMemoryCache } from "@apollo/client";
import { HttpLink } from "@apollo/client";
import fetch from "cross-fetch"; // Apollo Client needs fetch for SSR

const uri = process.env.NEXT_PUBLIC_BASE_URL
  ? `${process.env.NEXT_PUBLIC_BASE_URL}/api/graphql`
  : "http://localhost:3000/api/graphql";

const GraphQlClient = new ApolloClient({
    link: new HttpLink({
    uri,
    fetch,
    headers: {
        // Add any headers your GraphQL server requires
        //Authorization: `Bearer ${process.env.GRAPHQL_API_KEY}`, // If applicable
        },
    }),
cache: new InMemoryCache(),
});

export default GraphQlClient;