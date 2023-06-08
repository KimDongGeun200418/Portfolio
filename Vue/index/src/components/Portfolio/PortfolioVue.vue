<template>
  <div id="PortfolioVue">
    <h3>Vue</h3>
    <v-divider :thickness="2" class="border-opacity-75"></v-divider>
    <v-carousel
      hide-delimiters
      show-arrows="hover"
      cover
      style="width: 1000px; height: 850px"
      class="text-center"
    >
      <!--carousel 아이템-->
      <v-carousel-item style="">
        <v-card class="cItem">
          <a href="http://kdg99.link/GA/Vue/TodoApp/" target="_blank">
            <v-img
              src="@/assets/Portfolio/TodoApp.png"
              cover
              class="mx-auto"
            ></v-img>
          </a>
          <v-card-title>TodoApp</v-card-title>
          <v-card-subtitle>
            Vue로 만든 Todo List <br />
            Local Storage를 이용한 List 저장 <br />
            (현재 배포중)
          </v-card-subtitle>
        </v-card>
      </v-carousel-item>

      <v-carousel-item style="">
        <v-card class="cItem">
          <a
            href="http://kdg99.link/GA/Vue/TodoAppBackend/TodoAppFrontend/"
            target="_blank"
          >
            <v-img
              src="@/assets/Portfolio/TodoAppFrontend.png"
              cover
              class="mx-auto"
            ></v-img>
          </a>
          <v-card-title>TodoAppFrontend</v-card-title>
          <v-card-subtitle>
            SpringBoot + Vue로 만든 Todo List <br />
            DB를 이용한 List 저장, 분리 배포 <br />
            (현재 배포 X)
          </v-card-subtitle>
        </v-card>
      </v-carousel-item>
      <!--carousel 아이템-->
    </v-carousel>
  </div>
</template>

<script setup></script>

<style scoped>
.cItem > a {
  display: inline-block;
  width: 700px;
  height: 700px;
}
.v-card--variant-elevated {
  box-shadow: none;
}
.v-card-subtitle {
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: 0.0178571429em;
  opacity: 1;
  color: #555;
}
</style>
