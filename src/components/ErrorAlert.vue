<template>
  <v-alert type="error" title="Error">
    {{ errorMessage }} <!-- props로 전달받은 errorMessage 데이터를 사용합니다. -->
  </v-alert>
</template>

<script>
export default {
  name: "ErrorAlert",
  props: {
    errorMessage: {
      type: String,
      required: true,
    },
  },
};
</script>
