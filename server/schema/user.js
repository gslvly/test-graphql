const { makeExecutableSchema } = require('graphql-tools')

const typeDefs = `
  type Query {
    user:User
  }
  type User {
    age: String
    name: String
    id: ID
  }
  schema {
    query: Query
  }
`

const resolvers = {
  Query: {

    user(...a) {
      console.log(a)
      return new Promise((resolve,reject) => {
        setTimeout(_ => {
          resolve({ name: 'ggg', id: 100 })
        }, 3000)
      })
    }
  },
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
