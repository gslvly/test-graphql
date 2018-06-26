const { makeExecutableSchema } = require('graphql-tools')

const typeDefs = `
  type Query {
    user(id: ID):User
  }
  type User {
    age: Int
    name(firstName: String!):String
    id: ID
    friends: [Man]
  }
  type Man {
    name(name1: String): String
  }
  schema {
    query: Query
  }
`

const resolvers = {
  Query: {

    user(...a) {

      return { name: 'ggg', id: 100, age: 200, friends: ['sf', 34] }
    }
  },
  Man: {
    name(obj, args) {
      console.log(obj, args)
      return 'sdfsf'
    }
  }
  // Query: {
  //   user(user) {
  //     console.log(user)
  //     return {
  //       id: 1,
  //       name: 'sfasdf'
  //     }
  //   }
  // },
}

module.exports = makeExecutableSchema({ typeDefs, resolvers })
