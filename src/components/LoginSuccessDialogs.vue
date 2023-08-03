<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="auto">
      <v-card>
        <v-card-text>
          회원가입 성공 로그인 페이지로 이동합니다.
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" block="" @click="success()">확인</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "LoginSuccessDialogs",
  props: {
    isShow: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      dialog: true,
    }
  },
  methods: {
    success() {
      this.$router.push('/login');
    }
  }

}
</script>