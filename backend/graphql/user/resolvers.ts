const usersList = [
  {
    name: "Yarin",
  },
  {
    name: "Eyal",
  },
];

const users = () => {
  return usersList;
};

export default {
  Queries: {
    users: users,
  },
  Mutations: {},
};
