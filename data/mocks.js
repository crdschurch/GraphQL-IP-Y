import casual from 'casual';

const mocks = {
  String: () => 'It works!',
  Query: () => ({
    address: (root, args) => {
      return { id: args.id, };
    },
  }),
  Address: () => ({ id: () => casual.id }),
};

export default mocks;
