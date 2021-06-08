const { ApolloServer } = require('apollo-server-express');
const express = require('express');
const mongoose = require('mongoose')
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const config = require('./dev');
const port = process.env.PORT || 4000;

const server = new ApolloServer({ typeDefs, resolvers })
const app = express();
server.applyMiddleware({ app });

mongoose.connect(config.DB_URI || process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('MongoDB connected')
  })
  .catch((error) => {
    console.log('Error connecting to MongoDB', error)
})

app.listen({ port: port }, (port) => {
  console.log(`🚀 Server ready at ${port}`);
});