<template>
  <v-sheet width="300" class="mx-auto">
    <v-form @submit.prevent>
      <v-text-field v-model="userId" :rules="idRules" label="아이디"></v-text-field>
      <v-text-field v-model="password" :type="'password'" :rules="pwRules" label="비밀번호"></v-text-field>
      <v-text-field v-model="passwordCheck" :type="'password'" :rules="checkRules" label="비밀번호 확인"></v-text-field>

      <!-- ErrorAlert 컴포넌트 사용할 때 message prop에 에러 메시지 전달 -->
      <ErrorAlert v-if="showError" :errorMessage="message"/>

      <v-btn @click="join()" block="" class="mt-2">Submit</v-btn>
    </v-form>
  </v-sheet>
</template>

<script>
import * as $api from "@/api/api";
import ErrorAlert from "@/components/ErrorAlert.vue";

export default {
  name: "JoinView",
  components: {ErrorAlert},
  props: {
    errorMessage: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      userId: "",
      password: "",
      passwordCheck: "",
      roles: ['USER'],
      showError: false,
      message: this.errorMessage,

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
      const joinData = {
        userId: this.userId,
        password: this.password,
        roles: this.roles
      };
      $api.post("member/join", joinData)
          .then(res => {
            if (res.success) {
              if (res.data == null) {
                this.showError = true;
                this.message = "회원가입에 실패했습니다.";
              } else {
                this.$router.push("/");
              }
            } else {
              this.showError = true;
              this.message = "회원가입에 실패했습니다.";
            }
          })
          .catch(() => {
            this.showError = true;
            this.message = "회원가입에 실패했습니다.";
          });
    }
  }
};
</script>