const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type Bio {
    _id: String
    name: String
    species: String
    class: String
    career: String
    careerLevel: String
    careerPath: String
    status: String
  }

  type Stat {
    _id: String
    stat: Int
    adv: Int
  }

  type Stats {
    _id: String
    WS: Stat
    BS: Stat
    S: Stat
    T: Stat
    I: Stat
    Ag: Stat
    Dex: Stat
    Int: Stat
    WP: Stat
    Fel: Stat
  }

  type Character {
    _id: String
    userId: String
    bio: Bio
    stats: Stats
    # basicSkills: [BasicSkill]
    # advSkills: [AdvSkill]
    # talents: [Talent]
    # fate: [Fate]
    # resolve: [Resolve]
  }

  type User {
    id: String
    name: String
    email: String
  }

  type Query {
    characters: [Character]
    users: [User]
    character (id: String): Character,
    user (id: String): User
  }

  input BioInput {
    name: String
    species: String
    class: String
    career: String
    careerLevel: String
    careerPath: String
    status: String
  }

  type Mutation {
    addCharacter(userId: String, bio: BioInput): Character
    addUser(name: String, email: String): User
  }
`;

module.exports = typeDefs;