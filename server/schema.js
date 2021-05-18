const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type Bio {
    name: String
    species: String
    class: String
    career: String
    careerLevel: String
    careerPath: String
    status: String
  }

  type Stat {
    stat: Int
    adv: Int
  }

  type Stats {
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
    _id: String
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

  input StatInput {
    stat: Int
    adv: Int
  }

  input StatsInput {
    WS: StatInput
    BS: StatInput
    S: StatInput
    T: StatInput
    I: StatInput
    Ag: StatInput
    Dex: StatInput
    Int: StatInput
    WP: StatInput
    Fel: StatInput
  }

  type Mutation {
    addCharacter(
      userId: String
      bio: BioInput
      stats: StatsInput
    ): Character

    addUser(name: String, email: String): User
  }
`;

module.exports = typeDefs;