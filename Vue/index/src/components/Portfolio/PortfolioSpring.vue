<template>
  <div id="PortfolioSpring">
    <h3>Spring</h3>
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
          <a href="http://kdg99.link:8100/Sboard" target="_blank">
            <v-img
              src="@/assets/Portfolio/Sboard.png"
              cover
              class="mx-auto"
            ></v-img>
          </a>
          <v-card-title>SBoard</v-card-title>
          <v-card-subtitle>
            SpringBoot로 만든 게시판 <br />
            ID : test2 / PW : 123 <br />
            (현재 배포 X)
          </v-card-subtitle>
        </v-card>
      </v-carousel-item>

      <v-carousel-item style="">
        <v-card class="cItem">
          <a href="http://kdg99.link:8105/Voard" target="_blank">
            <v-img
              src="@/assets/Portfolio/Voard.png"
              cover
              class="mx-auto"
            ></v-img>
          </a>
          <v-card-title>Voard</v-card-title>
          <v-card-subtitle>
            SpringBoot + Vue로 만든 게시판 <br />
            ID : test2 / PW : 123 / 연동 배포<br />
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
