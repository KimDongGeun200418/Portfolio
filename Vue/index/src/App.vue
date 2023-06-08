<template>
  <router-view />
</template>

<script setup></script>

<style>
div.main-wrap > div > h3 {
  margin: 15px 10px 10px;
}
div.main-wrap > div > h3::after {
  content: " (이미지 클릭시 이동합니다.)";
  font-size: small;
  color: gray;
}

.hanji {
  background-image: url("@/assets/background-hanji3.jpg");
}
</style>
