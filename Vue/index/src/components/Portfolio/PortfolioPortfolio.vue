<template>
  <div id="PortfolioPortfolio">
    <h3>Portfolio</h3>
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
          <a href="http://kdg99.link:8104/Beauty" target="_blank">
            <v-img
              src="@/assets/Portfolio/Beauty.png"
              cover
              class="mx-auto"
            ></v-img>
          </a>
          <v-card-title>Beauty</v-card-title>
          <v-card-subtitle>
            SpringBoot로 만든 쇼핑몰 <br />
            세 번째 팀프로젝트 - 2~30대 여성들을 겨냥한 쇼핑몰<br />
            마이페이지, 장바구니, 구매, 쿠키허용 구현 <br />
            (현재 배포중)
          </v-card-subtitle>
        </v-card>
      </v-carousel-item>

      <v-carousel-item style="">
        <v-card class="cItem">
          <a href="http://kdg99.link:8102/Farmstory" target="_blank">
            <v-img
              src="@/assets/Portfolio/FarmstoryJ.png"
              cover
              class="mx-auto"
            ></v-img>
          </a>
          <v-card-title>FarmstoryJ</v-card-title>
          <v-card-subtitle>
            SpringBoot(InteliJ)로 만든 홈페이지 <br />
            개인프로젝트 / jakarta 메일인증 및 배송조회 구현<br />
            (현재 배포 X)
          </v-card-subtitle>
        </v-card>
      </v-carousel-item>

      <v-carousel-item style="">
        <v-card class="cItem">
          <a href="http://kdg99.link:8101/Kmarket2" target="_blank">
            <v-img
              src="@/assets/Portfolio/Kmarket2.png"
              cover
              class="mx-auto"
            ></v-img>
          </a>
          <v-card-title>Kmarket2</v-card-title>
          <v-card-subtitle>
            SpringBoot로 만든 쇼핑몰 <br />
            두 번째 팀프로젝트 / 메인, 상품, 회원가입 구현<br />
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
