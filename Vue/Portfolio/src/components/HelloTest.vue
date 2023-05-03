<template>
  <p>test</p>
  <div>
    {{ name }} : {{ doubleCount }}
    <button @click="increment">increment</button>
  </div>
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
