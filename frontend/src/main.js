import Vue from 'vue'
import App from './App.vue'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import VueApollo from 'vue-apollo'

import router from './router'

const httpLink = new HttpLink({
  // You should use an absolute URL here
  uri: 'http://localhost:9010/graphql'
})

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  connectToDevTools: true
})

// Install the vue plugin
Vue.use(VueApollo)

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
})

Vue.config.productionTip = false

new Vue({
  router,
  ...App,
  provide: apolloProvider.provide()
}).$mount('#app')
