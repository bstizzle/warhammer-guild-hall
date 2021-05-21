const { Character, User } = require('./models');

const resolvers = {
  Query: {
    characters (parent, args, context, info) {
      return Character.find()
        .then (character => {
            return character.map (c => ({ ...c._doc }))
        })
        .catch (err => {
            console.error(err)
        })
    },
    character (parent, args, context, info) {
      return Character.findOne({ _id: args.id })
        .then (character => {
          console.log(character.basicSkills.filter(s => s.name === 'Bribery'))
          return { ...character._doc }
        })
        .catch (err => {
          console.error(err)
        })
    },
    users (parent, args, context, info) {
      return User.find()
        .then (user => {
            return user.map (u => ({ ...u._doc }))
        })
        .catch (err => {
            console.error(err)
        })
    },
    user (parent, args, context, info) {
      return User.findOne({ _id: args.id })
        .then (user => {
            return { ...user._doc }
        })
        .catch (err => {
            console.error(err)
        })
    },
  },
  Mutation: {
    addCharacter (parent, args, context, info) {
      const { userId, bio, stats, basicSkills, talents, fate, resolve, currentWounds } = args
      const charObj = new Character({
        userId,
        bio,
        stats,
        basicSkills,
        talents,
        fate,
        resolve,
        currentWounds
      })
      return charObj.save()
        .then(result => {
          return { ...result._doc}
        })
        .catch(err => {
          console.log(err)
        })
    },
    updateCharacter: async (parent, args, context, info) => {
      const { id, input } = args
      console.log(input)
      console.log(id)
      const charObj = await Character.findOne({_id: id})
      charObj.bio = input.bio
      charObj.stats = input.stats
      charObj.basicSkills = input.basicSkills
      charObj.talents = input.talents
      charObj.fate = input.fate
      charObj.resolve = input.resolve
      charObj.currentWounds = input.currentWounds

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