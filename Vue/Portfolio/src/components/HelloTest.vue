<template>
  <p>test</p>
  <div>
    {{ name }} : {{ doubleCount }}
    <button @click="increment">increment</button>
  </div>

  <v-btn
    href="https://next.vuetifyjs.com/components/all/"
    min-width="164"
    rel="noopener noreferrer"
    target="_blank"
    variant="text"
  >
    <v-icon icon="mdi-view-dashboard" size="large" start />

    Components
  </v-btn>
</template>

<script setup>
import { useAppStore } from "@/store/app";
import { storeToRefs } from "pinia";
const appStore = useAppStore();
const { doubleCount, name } = storeToRefs(appStore);
const { increment } = appStore;

/*
const btnIncrease = () => {
  increment();
};
*/
</script>
