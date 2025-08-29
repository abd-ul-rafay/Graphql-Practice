const typeDefs = `#graphql
  type Book {
    id: ID!
    title: String!
    pages: Int
    releaseDate: String
    author: Author!
  }
  
  type Author {
    id: ID!
    name: String!
    email: String!
  }

  type Query {
    books: [Book]
    book(id: ID!): Book
    authors: [Author]
    author(id: ID!): Author
  }

  type Mutation {
    deleteBook(id: ID!): [Book]
    deleteAuthor(id: ID!): [Author]
  }
`;

export { typeDefs };
