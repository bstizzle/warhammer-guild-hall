const data = require('../src/fakeDb/fakeData');
const { Character, User } = require('./models');

const resolvers = {
  Query: {
    characters (parent, args, context, info) {
      
    },
    character (parent, args, context, info) {
      
    },
    users (parent, args, context, info) {
      
    },
    user (parent, args, context, info) {
      
    },
  },
  Mutation: {
    addCharacter (parent, args, context, info) {
      const { userId, bio } = args
      const charObj = new Character({
        userId,
        bio
      })
      return charObj.save()
        .then(result => {
          return { ...result._doc}
        })
        .catch(err => {
          console.log(err)
        })
    },
    addUser (parent, args, context, info) {
      const { name, email } = args
      const userObj = new User({
        name,
        email
      })
      return userObj.save()
        .then(result => {
          return { ...result._doc}
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}

module.exports = resolvers;