import {
  makeExecutableSchema,
  // addMockFunctionsToSchema,
} from 'graphql-tools';
// import mocks from './mocks';
import resolvers from './resolvers';

const typeDefs = `
type Address {
  Address_ID: ID
  Address_Line_1: String
  City: String
  Postal_Code: String
}

type Contact {
  contactId: ID
  displayName: String
}

type Household {
  Household_ID: ID
  Household_Name: String
  contacts: [Contact]
  Address: Address
}

type Query {
  address(Address_ID: Int): Address
  contact(contactId: Int): Contact
  household(Household_ID: Int): Household
}
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

// addMockFunctionsToSchema({ schema, mocks });

export default schema;
