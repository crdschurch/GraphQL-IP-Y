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

type Participant {
  participantId: ID
  contact: Contact
}

type Contact {
  contactId: ID
  displayName: String
  participant: Participant
}

type Event {
  eventId: ID
  eventTitle: String
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
  events: [Event]
  household(Household_ID: Int): Household
  participant(participantId: Int): Participant
}
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

// addMockFunctionsToSchema({ schema, mocks });

export default schema;
