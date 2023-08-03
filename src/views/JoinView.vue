<template>
  <div style="height: 120px"></div>
  <v-card
      class="mx-auto pa-12 pb-8"
      elevation="8"
      max-width="400"
      rounded="rounded"
  >
    <div class="text-center" style="padding-bottom: 10px">
      <p class="font-weight-black">
        회원가입
      </p>
    </div>

    <v-sheet width="300" class="mx-auto">
      <v-form @submit.prevent>
        <!-- ErrorAlert 컴포넌트 사용할 때 message prop에 에러 메시지 전달 -->
        <ErrorAlert v-if="showError" :message="message"/>
        <LoginSuccessDialogs v-if="showSuccess" :isShow="isShow"></LoginSuccessDialogs>

        <v-text-field
            v-model="userId"
            :rules="idRules"
            label="아이디"
            prepend-icon="mdi-id-card"
            variant="underlined"
        ></v-text-field>

        <v-text-field
            v-model="password"
            :type="'password'"
            :rules="pwRules" label="비밀번호"
            prepend-icon="mdi-lock"
            variant="underlined"
        ></v-text-field>

        <v-text-field
            v-model="passwordCheck"
            :type="'password'"
            :rules="checkRules"
            label="비밀번호 확인"
            prepend-icon="mdi-lock"
            variant="underlined"
        ></v-text-field>

        <v-text-field
            v-model="email"
            label="이메일"
            suffix="@gmail.com"
            prepend-icon="mdi-email"
            variant="underlined"
        ></v-text-field>

        <v-text-field
            v-model="name"
            label="이름"
            prepend-icon="mdi-account-circle"
            variant="underlined"
        ></v-text-field>


        <v-select
            v-model="addr"
            prepend-icon="mdi-home"
            label="지역"
            :items="['서울시', '경기도', '전라도', '경상도', '강원도', '제주도']"
            variant="underlined"
        ></v-select>

        <v-text-field
            v-model="birthday"
            placeholder="0000-00-00"
            label="생년월일"
            prepend-icon="mdi-calendar"
            variant="underlined"
        ></v-text-field>

        <v-text-field
            v-model="tel"
            placeholder="000-0000-0000"
            label="전화번호"
            prepend-icon="mdi-phone"
            variant="underlined"
        ></v-text-field>

        <v-btn @click="join()" :block="true" color="blue" class="mt-2">회원가입</v-btn>
      </v-form>
    </v-sheet>
  </v-card>
</template>

<script>
import * as $api from "@/api/api";
import ErrorAlert from "@/components/ErrorAlert.vue";
import LoginSuccessDialogs from "@/components/LoginSuccessDialogs.vue";

export default {
  name: "JoinView",
  components: {LoginSuccessDialogs, ErrorAlert},
  data() {
    return {
      userId: "",
      password: "",
      passwordCheck: "",
      email: "",
      name: "",
      addr: "",
      birthday: "",
      tel: "",
      roles: ['USER'],

      showError: false,
      showSuccess: false,
      message: "",
      isShow: false,

      idRules: [
        v => !!v || '아이디를 입력해주세요.',
        v => (v && v.length >= 6) || '아이디는 6자 이상이어야 합니다.'
      ],

      pwRules: [
        v => !!v || '비밀번호를 입력해주세요.',
        v => (v && v.length >= 12) || '비밀번호는 12자 이상이어야 합니다.'
      ],

      checkRules: [
        v => !!v || '비밀번호를 입력해주세요.',
        v => v === this.password || "비밀번호가 일치하지 않습니다."
      ]
    };
  },
  methods: {
    join() {
      if (this.userId === '' || this.password === '' || this.userId === null || this.password === null) {
        // 아이디 또는 비밀번호가 비어있는 경우, post 호출을 하지 않고 에러 처리
        this.showError = true;
        this.message = "아이디와 비밀번호를 입력해주세요.";
        return;
      }
      const joinData = {
        userId: this.userId,
        password: this.password,
        email: this.email,
        name: this.name,
        addr: this.addr,
        birthday: this.birthday,
        phone: this.phone,
        roles: this.roles
      };
      $api.post("member/join", joinData)
          .then(res => {
            if (res.success) {
              if (res.data == null) {
                this.showError = true;
                this.message = res.message;
              } else {
                this.showSuccess = true;
                this.isShow = true;
              }
            }
          })
          .catch(error => {
            this.showError = true;
            this.message = error.detail;
          });
    }
  }
};
</script>
