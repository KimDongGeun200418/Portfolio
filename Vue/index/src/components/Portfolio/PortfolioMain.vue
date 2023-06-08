<template>
  <div id="PortfolioMainLink">
    <h3 class="m3">김동근 Portfolio</h3>
    <v-divider :thickness="2" class="border-opacity-75"></v-divider>
    <div>
      <p>Spring test</p>
      <div>
        <a href="http://kdg99.link/Ch09/" target="_blank">Ch09</a>
        REST API 유저 관리
      </div>
    </div>
    <v-divider :thickness="2" class="border-opacity-75"></v-divider>
    <div>
      <p>JSP</p>
      <div>
        <a href="http://kdg99.link/Farmstory1/" target="_blank">Farmstory1</a>
        홈페이지 / JSP / Model1
      </div>
      <div>
        <a href="http://kdg99.link/Farmstory2/" target="_blank">Farmstory2</a>
        홈페이지 / JSP / Model2
      </div>
      <div>
        <a href="http://kdg99.link/Kmarket1/" target="_blank">Kmarket1</a>
        쇼핑몰 / JSP / Model2 / 첫 팀프로젝트 / 리뷰 구현
      </div>
      <div>
        <a href="http://kdg99.link/JBoard1" target="_blank">JBoard1</a>
        게시판 / JSP / Model1 / test,1234 / 댓글 수정 구현
      </div>
      <div>
        <a href="http://kdg99.link/JBoard2" target="_blank">JBoard2</a>
        게시판 / JSP / Model2 / 검색 기능, 마이페이지, 정보 변경 구현
      </div>

      <p>SpringBoot</p>
      <div>
        <a href="http://kdg99.link:8100/Sboard" target="_blank">SBoard</a>
        게시판 / SpringBoot / 8100port / test2, 123
      </div>

      <p>Vue</p>
      <div>
        <a href="http://kdg99.link/GA/Vue/TodoApp/" target="_blank">TodoApp</a>
        목록 / Vue
      </div>
      <div>
        <a
          href="http://kdg99.link/GA/Vue/TodoAppBackend/TodoAppFrontend/"
          target="_blank"
          >TodoAppFrontend</a
        >
        목록 / Spring + Vue / 8103port / 분리배포
      </div>

      <p>Spring + Vue</p>
      <div>
        <a href="http://kdg99.link:8105/Voard" target="_blank">Voard</a>
        게시판 / Spring + Vue / 8105port / 연동배포 / test2, 123
      </div>
    </div>
    <v-divider :thickness="2" class="border-opacity-75"></v-divider>
    <div>
      <p>Portfolio</p>
      <div>
        <a href="http://kdg99.link:8102/Farmstory" target="_blank"
          >FarmstoryJ</a
        >
        홈페이지 / SpringBoot(InteliJ) / 8102port / 개인프로젝트 / 배송조회 구현
      </div>
      <div>
        <a href="http://kdg99.link:8101/Kmarket2" target="_blank">Kmarket2</a>
        쇼핑몰 / SpringBoot / 8101port / 두 번째 팀프로젝트
      </div>
      <div>
        <a href="http://kdg99.link:8104/Beauty" target="_blank">Beauty</a>
        쇼핑몰 / SpringBoot / 8104port / 세 번째 팀프로젝트 / admin@admin 1234,
        내거123
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
div.main-wrap > div > div {
  margin: 10px;
}

div.main-wrap > div > div > p {
  margin-top: 10px;
}
</style>
