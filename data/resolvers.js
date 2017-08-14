import { Addresses, Contacts, Events, Households, Participants } from './connectors';

const resolvers = {
  Query: {
    address(_, args) {
      console.log(args);
      return Addresses.find({ where: args });
    },
    contact(_, args) {
      console.log(args);
      return Contacts.find({
        where: args,
        include: [
          { model: Participants, as: 'participant' },
        ],
      });
    },
    household(_, args) {
      console.log(args);

      return Households.find({
        where: args,
        include: [
          { model: Addresses, as: 'Address' },
          { model: Contacts, as: 'contacts' },
        ],
      });
    },
    participant(_, args) {
      console.log(args);

      return Participants.find({
        where: args,
        include: [
          { model: Contacts, as: 'contact' },
        ],
      });
    },
    events(_, args) {
      console.log(args);

      return Events.findAll({
        where: args,
      });
    },
  },
};

export default resolvers;
