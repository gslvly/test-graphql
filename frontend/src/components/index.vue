<template>
  <div>
    {{hello}}
  </div>
</template>

<script>
import gql from 'graphql-tag'

export default {
  data() {
    return {
      hello: ''
    }
  },
  apollo: {
    hello: {
      query: gql`query fff($message: String!){
        hello(msg: $message)
      }`,
      variables: {
        message: '我是msg'
      }
    }
  },
  created() {
    console.log(this.hello)
  }
}
</script>

<style lang="scss">
</style>
