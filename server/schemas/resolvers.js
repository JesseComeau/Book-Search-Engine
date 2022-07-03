const { User, Book } = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
  Query: {
    user: async (parent, { username }) => {
      const foundUser = await User.findOne({
        $or: [{ _id: user ? user._id : params.id }, { username: username }],
      });

      if (!foundUser) {
        throw new AuthenticationError('No User Found')
      }

      return foundUser
  },
  }
};

module.exports = resolvers;
