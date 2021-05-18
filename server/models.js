const mongoose = require('mongoose');
const { Schema } = mongoose;

const BioSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    // required: true
  },
  name: {
    type: String
  },
  species: {
    type: String
  },
  class: {
    type: String
  },
  career: {
    type: String
  },
  careerLevel: {
    type: String
  },
  careerPath: {
    type: String
  },
  status: {
    type: String
  }
})

const StatSchema = new Schema({
  stat: {
    type: Number
  },
  adv: {
    type: Number
  }
})

const StatsSchema = new Schema({
  WS: {
    type: StatSchema
  },
  BS: {
    type: StatSchema
  },
  S: {
    type: StatSchema
  },
  T: {
    type: StatSchema
  },
  I: {
    type: StatSchema
  },
  Ag: {
    type: StatSchema
  },
  Dex: {
    type: StatSchema
  },
  Int: {
    type: StatSchema
  },
  WP: {
    type: StatSchema
  },
  Fel: {
    type: StatSchema
  },
})

const CharacterSchema = new Schema({
  bio: {
    type: BioSchema
  },
  stats: {
    type: StatsSchema
  }
})

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
})

const Character = mongoose.model('Character', CharacterSchema)
const User = mongoose.model('User', UserSchema)
module.exports = {
  Character,
  User
}