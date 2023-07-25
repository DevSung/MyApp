import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from './router'
import apiInstance from "@/api/api";

loadFonts()
const app = createApp(App);

// Vue 애플리케이션의 인스턴스에 Axios 인스턴스를 등록합니다.
app.config.globalProperties.$api = apiInstance;

createApp(App).use(router)
  .use(vuetify)
  .mount('#app')
