<template>
  <div style="height: 160px"></div>
  <div>
    <v-img
        class="mx-auto my-6"
        max-width="228"
        src="https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-v3-slim-text-light.svg"
    ></v-img>

    <v-card
        class="mx-auto pa-12 pb-8"
        elevation="8"
        max-width="400"
        rounded="rounded"
    >
      <div class="text-subtitle-1 text-medium-emphasis"></div>
      <v-text-field
          v-model="userId"
          density="compact"
          placeholder="아이디를 입력해주세요."
          prepend-inner-icon="mdi-account-outline"
          variant="outlined"
      >
      </v-text-field>

      <div class="text-right">
        <router-link class="text-caption text-decoration-none text-blue" to="/join" target="_self">
          Forgot login password?
        </router-link>
      </div>

      <!-- 비밀번호 입력 필드 -->
      <v-text-field
          v-model="password"
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible ? 'text' : 'password'"
          density="compact"
          placeholder="비밀번호를 입력해주세요."
          prepend-inner-icon="mdi-lock-outline"
          variant="outlined"
          @click:append-inner="visible = !visible"
      ></v-text-field>

      <v-btn @click="login()" :block="true" class="mb-8" color="red" size="large" variant="tonal"> Log In</v-btn>

      <v-card-text class="text-center">
        <router-link
            class="text-blue text-decoration-none"
            to="/join"
            target="_self"
        >
          Sign up now
          <v-icon icon="mdi-chevron-right"></v-icon>
        </router-link>
      </v-card-text>
    </v-card>
  </div>
</template>
<script>
import * as $api from "@/api/api";
import {setCookie} from "@/api/cookie";

export default {
  name: "LoginView",
  data() {
    return {
      userId: "",
      password: "",
      visible: false,
    };
  },
  methods: {
    login() {
      const loginData = {
        userId: this.userId,
        password: this.password,
      };
      // POST 요청으로 로그인 API 호출
      $api.post("member/login", loginData)
          .then(res => {
            if (res.success) {
              setCookie("accessToken", res.data.accessToken, 7);
              setCookie("refreshToken", res.data.refreshToken, 7);
              this.$router.push("/main");
            }
          })
          .catch(() => {
            alert("로그인 실패");
          });
    }
  },
};
</script>