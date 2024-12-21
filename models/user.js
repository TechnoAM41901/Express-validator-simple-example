let users = [];

module.exports = {
  getAll: () => users,
  create: (user) => {
    users.push(user);
    return user;
  },
  findByEmail: (email) => users.find(user => user.email === email),
};
