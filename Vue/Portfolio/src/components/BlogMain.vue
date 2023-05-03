<template>
  <v-card>
    <v-layout>
      <!-- side -->
      <v-navigation-drawer
        color="grey-darken-2"
        permanent
        width="250"
      ></v-navigation-drawer>

      <!-- main banner -->
      <v-app-bar color="grey" height="48" flat></v-app-bar>

      <!-- side right -->
      <v-navigation-drawer
        color="grey-lighten-1"
        location="right"
        permanent
        width="150"
      ></v-navigation-drawer>

      <!-- footer -->
      <v-app-bar
        color="grey-lighten-2"
        flat
        height="48"
        location="bottom"
      ></v-app-bar>

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

<script setup></script>

<style scoped></style>
