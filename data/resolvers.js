import { Addresses, Contacts, Households } from './connectors';

const resolvers = {
  Query: {
    address(_, args) {
      console.log(args);
      return Addresses.find({ where: args });
    },
    contact(_, args) {
      console.log(args);
      return Contacts.find({ where: args });
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
  },
};

export default resolvers;
