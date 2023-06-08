<template>
  <v-navigation-drawer width="250" image="@/assets/background-hanji3.jpg" v-model="drawer" disable-resize-watcher="true">
    <v-list>
      <v-list-item class="text-center p10">
        <v-avatar
          image="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
          size="200"
          class="mb-3"
        ></v-avatar>
        <span id="profileName" class="text-h6 font-weight-bold">김동근</span>
      </v-list-item>
      <v-list-item class="mt-10">
        <nav class="category">
          <h5>카테고리</h5>
          <ul class="category_list">
            <li class="category_item">
              <router-link to="/">메인</router-link>
            </li>
            <li class="category_item">
              <a href="" disabled> 포트폴리오 </a>
              <ul class="sub_category_list">
                <li class="category_item">
                  <router-link to="/JSP">JSP</router-link>
                </li>
                <li class="category_item">
                  <router-link to="/Vue">Vue</router-link>
                </li>
                <li class="category_item">
                  <router-link to="/Spring">SpringBoot</router-link>
                </li>
                <li class="category_item">
                  <router-link to="/Portfolio">Portfolio</router-link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <nav class="category">
          <h5>Contact</h5>
          <ul class="category_list">
            <li class="category_item">
              <a href="https://github.com/kdg99" target="_blank">
                <img
                  src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/github.svg"
                  alt="GitHub"
                  height="50"
                />
              </a>
              <a href="https://kdg99.tistory.com" target="_blank">
                <img
                  src="@/assets/tistorylogo.svg"
                  alt="Tistory"
                  height="50"
                />
              </a>
              <a href="mailto:gpaj123ehdm@gmail.com" target="_blank">
                <img
                  src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/mail-dot-ru.svg"
                  alt="Tistory"
                  height="50"
                />
              </a>
            </li>
          </ul>
        </nav>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    drawer: Boolean,
});

const drawer = computed(() => {
  return props.drawer;
});




</script>

<style scoped>
a {
  text-decoration: none;
  color: #555;
}
nav.category {
  border: 2px solid #7a583a;
  margin-bottom: 50px;
}
nav.category ul {
  padding: 10px;
}
nav.category > h5 {
  background-color: #fff9f5;
  color: #a50000;
  padding: 7px;
  font-size: 1rem;
}
nav.category .category_item {
  padding: 6px 0 7px;
  font-weight: 400;
  font-size: 1rem;
}
nav.category .category_item > a > img {
  margin: 5px;
}
nav.category .sub_category_list {
  overflow: hidden;
  margin-bottom: -4px;
  padding-top: 6px;
}
nav.category .sub_category_list li {
  position: relative;
  padding: 3px 0 3px 9px;
  font-size: 0.9rem;
}
nav.category .sub_category_list li::before {
  content: "";
  position: absolute;
  bottom: 7px;
  left: 0;
  width: 2px;
  height: 100%;
  background-color: #eee;
}
nav.category .sub_category_list li:first-child::before {
  height: 65%;
}

div.v-navigation-drawer__scrim{
  display: none;
}

</style>
