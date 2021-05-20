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
    updateCharacter (parent, args, context, info) {
      const { id, bio, stats, basicSkills, talents, fate, resolve, currentWounds } = args
      const charObj = Character.findOneAndUpdate({_id: id}, {bio, stats, basicSkills, talents, fate, resolve, currentWounds}, {new: true})
      return charObj
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