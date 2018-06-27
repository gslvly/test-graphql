const { makeExecutableSchema, mergeSchemas } = require('graphql-tools')

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
    user(obj, args, ctx) {

      return { name: 'ggg', id: 100, age: 200, friends: [], fsdf: 123 }
    }
  },
  User: {
    name(obj, args) {
      // console.log(obj, args)
      return args.firstName
    }
  },
  Man: {
    name(obj) {
      return obj.id
    }
  }
}
const me = `
  type Query {
    me:Me
    name: String
  }
  type Me {
    age: Int
    friends: [Friends]
  }
  enum Friends {
    f1
    f2
    f3
  }
  type Mutation  {
    age(age: Int): Int
  }
  schema{
    query: Query
    mutation: Mutation
  }
`
const re = {
  Query: {
    me() {
      return { age: 1000}
    },
    name() {
      return 'test'
    }
  },
  Mutation: {
    age(obj, args,ctx) {
      console.log(obj,args,ctx.body)
      return args.age
    }
  }
}

const schema1 = makeExecutableSchema({ typeDefs, resolvers })
const schema2 = makeExecutableSchema({ typeDefs: me, resolvers: re })
module.exports = mergeSchemas({ schemas: [schema1, schema2] })
