const { ApolloServer, gql } = require('apollo-server');
const data = require('./src/fakeDb/fakeData');

const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    title: String
    author: String
  }

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

  type Fate {
    
  }

  type Stat {
    stat: Int
    adv: Int
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    books: [Book]
    characters: [Character]
  }
`;

const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
  },
];

const resolvers = {
  Query: {
    books: () => books,
    characters: () => [data]
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});