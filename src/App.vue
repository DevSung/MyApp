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
html, body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  height: 100%;
  /* 배경 이미지 설정 */
  background-image: url('@/assets/background.svg'); /* 이미지 경로를 수정하세요 */
  background-size: cover; /* 이미지를 화면에 맞게 조절 */
  background-repeat: no-repeat; /* 이미지 반복 비활성화 */
}
</style>
