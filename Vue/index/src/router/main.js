//기본 경로

import MainPageView from "@/views/MainPageView.vue";
import TestPageView from "@/views/TestPageView.vue";

let routes = [
  {
    path: "",
    name: "Index",
    component: MainPageView,
  },
  {
    path: "/test",
    name: "Test",
    component: TestPageView,
  },
];

export default routes;
