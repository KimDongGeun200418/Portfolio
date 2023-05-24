// Composables
import { createRouter, createWebHistory } from "vue-router";

import main from "./main";

const baseRoutes = [];
const routes = baseRoutes.concat(main);

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

/*
이동 로그
router.beforeEach((to, from, next) => {
  console.log(`Navigating to: ${to.name}`);
  next();
});
*/
//타이틀 동적 변경
router.afterEach((to, from) => {
  const title = to.meta.title || "Portfolio KDG"; //to.meta에 title이 없으면 기본값
  if (title) document.title = title;
});
export default router;
