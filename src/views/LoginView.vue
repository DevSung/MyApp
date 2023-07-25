<template>
  <div>
    <v-img
        class="mx-auto my-6"
        max-width="228"
        src="https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-v3-slim-text-light.svg"
    ></v-img>

    <v-card
        class="mx-auto pa-12 pb-8"
        elevation="8"
        max-width="448"
        rounded="lg"
    >
      <div class="text-subtitle-1 text-medium-emphasis">Account</div>

      <v-text-field
          v-model="userId"
          density="compact"
          placeholder="Email address"
          prepend-inner-icon="mdi-email-outline"
          variant="outlined"
      >
      </v-text-field>

      <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
        Password
        <a class="text-caption text-decoration-none text-blue" ref="#" rel="noopener noreferrer" target="_blank">
          Forgot login password?
        </a>
      </div>

      <!-- 비밀번호 입력 필드 -->
      <v-text-field
          v-model="password"
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible ? 'text' : 'password'"
          density="compact"
          placeholder="Enter your password"
          prepend-inner-icon="mdi-lock-outline"
          variant="outlined"
          @click:append-inner="visible = !visible"
      ></v-text-field>

      <v-btn @click="login()" block="" class="mb-8" color="red" size="large" variant="tonal"> Log In</v-btn>

      <v-card-text class="text-center">
        <a
            class="text-blue text-decoration-none"
            href="#"
            rel="noopener noreferrer"
            target="_blank"
        >
          Sign up now
          <v-icon icon="mdi-chevron-right"></v-icon>
        </a>
      </v-card-text>
    </v-card>
  </div>
</template>
<script>
import * as $api from "@/api/api";

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
      // 로그인 요청에 필요한 사용자 정보
      const loginData = {
        userId: this.userId,
        password: this.password,
      };
      // POST 요청으로 로그인 API 호출
      $api.post("member/login", loginData)
          .then(response => {
            // 로그인 성공 시 응답 처리
            console.log("Login Successful:", response.data);
            // 로그인 성공 후 추가 작업 가능
          })
          .catch(() => {
            alert("로그인 실패");
          });
    },
  },
};
</script>