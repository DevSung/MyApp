<template>
  <div id="app">
    <Header v-if="showHeader"/>
    <router-view/>
  </div>
</template>

<script>
import CommonHeader from "@/layout/CommonHeader.vue";
import router from '@/router';

export default {
  name: "App",
  components: {
    Header: CommonHeader
  },
  data() {
    return {
      showHeader: true,
    };
  },
  beforeCreate() {
    router.beforeEach((to, from, next) => {
      const hideHeaderPaths = ['/', '/login', '/join'];
      this.showHeader = !hideHeaderPaths.includes(to.path);
      next();
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>