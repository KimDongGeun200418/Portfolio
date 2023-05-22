<template>
  <v-card>
    <v-layout>
      <Header></Header>
      <Menu></Menu>

      <v-main
        style="min-height: 300px"
        image="@/assets/background-hanji3.jpg"
      ></v-main>
    </v-layout>
  </v-card>
</template>

<script setup>
import Header from "@/components/_Header.vue";
import Menu from "@/components/_Menu.vue";
</script>

<style scoped></style>
