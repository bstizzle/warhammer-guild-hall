const { ApolloServer, gql } = require('apollo-server');
const axios = require('axios');
const data = require('./fakeDb/fakeData');

const typeDefs = gql`
  type Character {
    bio: Bio
    stats: Stats
    # basicSkills: [BasicSkill]
    # advSkills: [AdvSkill]
    # talents: [Talent]
    # fate: [Fate]
    # resolve: [Resolve]
  }

  type Bio {
    name: String
    species: String
    class: String
    career: String
    careerLevel: String
    careerPath: String
    status: String
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

  type Stat {
    stat: Int
    adv: Int
  }

  type Query {
    characters: [Character]
  }
`;

const resolvers = {
  Query: {
    characters: async () => await [data]
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

server.listen(3000).then(({ url }) => console.log(`Server ready at ${url}`))