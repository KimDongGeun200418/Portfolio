<template>
  <div id="PortfolioJSP">
    <h3>JSP</h3>
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
          <a href="http://kdg99.link/Farmstory1" target="_blank">
            <v-img
              src="@/assets/Portfolio/Farmstory1.png"
              cover
              class="mx-auto"
            ></v-img>
          </a>
          <v-card-title>Farmstory1</v-card-title>
          <v-card-subtitle>
            JSP Model1으로 만든 홈페이지 <br />
            (현재 배포중)
          </v-card-subtitle>
        </v-card>
      </v-carousel-item>

      <v-carousel-item style="">
        <v-card class="cItem">
          <a href="http://kdg99.link/Farmstory2" target="_blank">
            <v-img
              src="@/assets/Portfolio/Farmstory2.png"
              cover
              class="mx-auto"
            ></v-img>
          </a>
          <v-card-title>Farmstory2</v-card-title>
          <v-card-subtitle>
            JSP Model2로 만든 홈페이지 <br />
            (현재 배포중)
          </v-card-subtitle>
        </v-card>
      </v-carousel-item>

      <v-carousel-item style="">
        <v-card class="cItem">
          <a href="http://kdg99.link/Kmarket1" target="_blank">
            <v-img
              src="@/assets/Portfolio/Kmarket1.png"
              cover
              class="mx-auto"
            ></v-img>
          </a>
          <v-card-title>Kmarket1</v-card-title>
          <v-card-subtitle>
            JSP Model2로 만든 쇼핑몰 <br />
            첫 팀프로젝트, 리뷰보기 및 아이디 마스킹 구현(딸기) <br />
            (현재 배포중)
          </v-card-subtitle>
        </v-card>
      </v-carousel-item>

      <v-carousel-item style="">
        <v-card class="cItem">
          <a href="http://kdg99.link/JBoard1" target="_blank">
            <v-img
              src="@/assets/Portfolio/JBoard1.png"
              cover
              class="mx-auto"
            ></v-img>
          </a>
          <v-card-title>JBoard1</v-card-title>
          <v-card-subtitle>
            JSP Model1으로 만든 게시판 <br />
            파일 업로드, 댓글 수정 구현 <br />
            ID : test / PW : 1234 <br />
            (현재 배포중)
          </v-card-subtitle>
        </v-card>
      </v-carousel-item>

      <v-carousel-item style="">
        <v-card class="cItem">
          <a href="http://kdg99.link/JBoard2" target="_blank">
            <v-img
              src="@/assets/Portfolio/JBoard2.png"
              cover
              class="mx-auto"
            ></v-img>
          </a>
          <v-card-title>JBoard2</v-card-title>
          <v-card-subtitle>
            JSP Model2로 만든 게시판 <br />
            검색 기능, 마이페이지, 정보 변경 구현 <br />
            ID : test / PW : 1234 <br />
            (현재 배포중)
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
