<template>
  <v-layout>
    <v-app-bar>
      <template v-slot:prepend>
        <v-btn density="compact" icon="mdi-format-align-justify"></v-btn>
      </template>
      <v-btn icon="mdi-alert-circle-outline"></v-btn>
      <v-btn icon="mdi-account"></v-btn>
    </v-app-bar>
  </v-layout>
</template>

<script>
export default {
  name: "CommonHeader",
};
</script>

<style>

</style>
