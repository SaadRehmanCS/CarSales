import { ApolloClient, InMemoryCache } from "@apollo/client";
import * as dotenv from 'dotenv';

export const apolloClient = new ApolloClient({
  uri: (process.env.API_HOST + "graphql") as any,
  cache: new InMemoryCache(),
});