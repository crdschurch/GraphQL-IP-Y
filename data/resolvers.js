import { Addresses, Households } from './connectors';

const resolvers = {
  Query: {
    address(_, args) {
      console.log(args);
      return Addresses.find({ where: args });
    },
    household(_, args) {
      console.log(args);

      return Households.find({
        where: args,
        include: {
          model: Addresses,
          as: 'Address',
        },
      });
    },
  },
};

export default resolvers;
