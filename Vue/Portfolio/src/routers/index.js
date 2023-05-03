// Composables
import { createRouter, createWebHistory } from "vue-router";

import app from "./app";

const baseRoutes = [];
const routes = baseRoutes.concat(app);

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
export default router;
