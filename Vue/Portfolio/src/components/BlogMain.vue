<template>
  <v-card>
    <v-layout>
      <!-- menu -->
      <BlogMenu></BlogMenu>

      <!-- footer -->
      <BlogFooter></BlogFooter>

      <!-- Top banner -->
      <v-app-bar flat height="">
        <v-img src="@/assets/fixImg/MainBanner.jpeg" cover></v-img>
      </v-app-bar>

      <!-- side right 
      <v-navigation-drawer
        color="grey-lighten-1"
        location="right"
        permanent
        width="150"
      ></v-navigation-drawer>
      -->

      <!-- content -->
      <v-main>
        <v-container
          class="d-flex justify-center align-center text-h5"
          style="min-height: 300px"
        >
          Content
        </v-container>
      </v-main>
    </v-layout>
  </v-card>
</template>

<script setup>
import BlogFooter from "./BlogFooter.vue";
import BlogMenu from "./BlogMenu.vue";
</script>

<style scoped></style>
