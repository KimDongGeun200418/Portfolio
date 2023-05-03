<template>
  <router-link to="/world">Hey</router-link>
  <router-link to="/test">Test</router-link>
  <router-view></router-view>
</template>

<script setup>
import { useRouter } from "vue-router";
import { onBeforeMount } from "vue";
const router = useRouter();

onBeforeMount(() => {
  //router.push("/test");
});
</script>
