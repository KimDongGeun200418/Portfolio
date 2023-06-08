<template>
  <v-card ref="el">
    <v-layout>
      <Header v-on:stop="stopHandler"></Header>
      <Menu v-bind:drawer="drawer"></Menu>

      <v-main v-bind:style="styleObject" image="@/assets/background-hanji3.jpg">
        <div class="main-wrap">
          <router-view />
        </div>
      </v-main>
    </v-layout>
  </v-card>
</template>

<script setup>
import Header from "@/components/_Header.vue";
import Menu from "@/components/_Menu.vue";
import { ref } from "vue";
import { useResizeObserver } from '@vueuse/core'

let check = true;
let drawer = ref(true);
let styleObject = {
  "min-height": "300px",
  "--v-layout-left": "250px",
};

const stopHandler = ()=>{
  drawer.value = !drawer.value;
  if(drawer.value){
    check = false;
    styleObject["--v-layout-left"] = "250px";
    setTimeout(()=>{
      check=true;
    }, 1000);
  }else{
    check = false;
    styleObject["--v-layout-left"] = "0px";
    setTimeout(()=>{
      check=true;
    }, 1000);
  }
};

const el = ref(null)
useResizeObserver(el, (entries) => {
  const [entry] = entries
  const { width, height } = entry.contentRect
  if(width <= 900 && check){
    drawer.value = false;
    styleObject["--v-layout-left"] = "0px";
  }else if (width > 900 && check){
    drawer.value = true;
    styleObject["--v-layout-left"] = "250px";
  }
})

</script>

<style scoped></style>
