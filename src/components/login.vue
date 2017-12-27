<template>
  <div>
    <h1>login</h1>
    <button @click="login">登录</button>
  </div>

</template>

<script>
export default {
  name: 'login',
  data: function () {
    return {
      msg: 'adf'
    }
  },
  methods:{
    login () {
      this.$router.push({ path:'/total'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
