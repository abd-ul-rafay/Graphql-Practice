import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './schema.js';
import { authors, books } from './db.js';

const resolvers = {
  Book: {
    author: (parent) => authors.find((author) => author.id == parent.author)
  },
  Query: {
    books: () => books,
    book: (_, { id }) => books.find((book) => book.id == id),
    authors: () => authors,
    author: (_, { id }) => authors.find((author) => author.id == id),
  },
  Mutation: {
    deleteBook: (_, { id }) => books.filter((book) => book.id != id),
    deleteAuthor: (_, { id }) => authors.filter((author) => author.id != id)
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀 Server ready at: ${url}`);
