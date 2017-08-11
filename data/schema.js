import {
  makeExecutableSchema,
  addMockFunctionsToSchema,
} from 'graphql-tools';
import mocks from './mocks';
import resolvers from './resolvers';

const typeDefs = `
type Address {
  Address_ID: ID
  Address_Line_1: String
  City: String
  State: String
  Postal_Code: String
}

type Household {
  Household_ID: Int
  Household_Name: String
}

type Query {
  address(id: Int): Address
  household(id: Int): Household
}
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

//addMockFunctionsToSchema({ schema, mocks });

export default schema;