const Koa = require('koa'),
  http = require('http'),
  koaBody = require('koa-bodyparser'),
  KoaRouter = require('koa-router'),
  { graphqlKoa, graphiqlKoa } = require('apollo-server-koa'),
  user = require('./schema/user'),
  cors = require('koa-cors')

const router = new KoaRouter()

const app = new Koa()
router.get('/graphql', graphqlKoa({ schema: user }))
router.post('/graphql', graphqlKoa({ schema: user }))
router.get('/graphiql', graphiqlKoa({ endpointURL: '/graphql' }))

app
  .use(cors())
  .use(koaBody())
  .use(router.routes())
  .use(router.allowedMethods())

const server = http.createServer(app.callback())
server.listen(9010)
