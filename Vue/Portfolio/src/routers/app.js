//기본 경로

import BlogMain from "@/components/BlogMain.vue";
import HelloTest from "@/components/HelloTest.vue";

let routes = [
  {
    path: "/",
    name: "Index",
    component: BlogMain,
  },
  {
    path: "/index",
    name: "BlogMain",
    component: BlogMain,
  },
  {
    path: "/test",
    name: "Test",
    component: HelloTest,
  },
];

export default routes;
