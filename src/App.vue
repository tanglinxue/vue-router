<template>
  <div>
    导航
    <router-link to='/'>首页</router-link>
    <router-link to='/about'>关于</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name:'APP',
  mounted(){
    // console.log(this.$router)
    // console.log(this.$route)
  }
}
</script>

<style>

</style>
