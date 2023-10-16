<template>
  <div id="main">
    <v-btn @click="test()" :block="true" class="mb-8" color="red" size="large" variant="tonal">테스트</v-btn>
  </div>

</template>

<script>
import {getCookie} from "@/api/cookie";

export default {
  name: 'MainView',

  methods: {
    test() {
      console.log(getCookie("accessToken"))
    }
  }

}

</script>