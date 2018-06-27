<template>
  <div>
    {{$apollo.data.user}}
    <br>
    user: {{user}}
  </div>
</template>

<script>
import gql from 'graphql-tag'

export default {
  data() {
    return {
      user: ''
    }
  },
  // apollo: {
  //   user: {
  //     query: gql`query age($age:Int){
  //       age(age: $age)
  //     }`,
  //     result(...a) {
  //       this.user = 'fsadfaf'
  //     },
  //     variables: {
  //       age: 1000
  //     },
  //   },
  // },
  created() {
    this.$apollo.mutate({
      mutation: gql` mutation
        age($age: Int){
          age(age:$age)
        }
      `,
      variables: {
        age: 1000
      }
    }).then(res => {
      this.user = res.data
      console.log(res)
    })
  }
}
</script>

<style lang="scss">
</style>
