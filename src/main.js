import {createApp} from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import {loadFonts} from './plugins/webfontloader'
import router from './router'
import apiInstance from "@/api/api";

loadFonts();
const app = createApp(App);

// Vue 애플리케이션의 인스턴스에 Axios 인스턴스를 등록합니다.
app.config.globalProperties.$api = apiInstance;

app.use(router) // 라우터 등록
    .use(vuetify) // Vuetify 플러그인 등록
    .mount('#app'); // 마운트
