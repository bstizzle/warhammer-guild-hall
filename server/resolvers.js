const data = require('../src/fakeDb/fakeData');
const { Character } = require('./models');

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
      const { bio } = args
      const charObj = new Character({
        bio
      })
      return charObj.save()
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