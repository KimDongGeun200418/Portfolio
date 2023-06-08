<template>
  <router-link to="/">Main</router-link> /
  <router-link to="/test">Test</router-link>
  <hr />
  <router-view></router-view>
</template>

<script setup>
import { useRouter } from "vue-router";
import { onBeforeMount } from "vue";
const router = useRouter();

onBeforeMount(() => {
  //router.push("/");
});
</script>

<style></style>
