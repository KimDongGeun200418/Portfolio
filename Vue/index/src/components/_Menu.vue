<template>
  <v-navigation-drawer width="240" image="@/assets/background-hanji3.jpg">
    <v-list>
      <v-list-item class="text-center">
        <v-avatar
          image="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
          size="200"
        ></v-avatar>
        <span id="profileName" class="text-h6 font-weight-bold">김동근</span>
      </v-list-item>
      <v-list-item>
        <nav class="category">
          <h5>카테고리</h5>
          <ul class="category_list">
            <li class="category_item">
              <a href="">메인</a>
            </li>
            <li class="category_item">
              <a href=""> 포트폴리오 </a>
              <ul class="sub_category_list">
                <li class="category_item">
                  <a href=""> JSP </a>
                </li>
                <li class="category_item">
                  <a href=""> SpringBoot </a>
                </li>
                <li class="category_item">
                  <a href=""> Vue </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped>
nav.category {
  border: 2px solid #7a583a;
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
</style>
