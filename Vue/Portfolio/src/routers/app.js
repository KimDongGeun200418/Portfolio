//기본 경로

import HelloWorld from "../components/HelloWorld.vue";
import HelloTest from "../components/HelloTest.vue";

let routes = [
  {
    path: "/",
    name: "Index",
    component: HelloWorld,
  },
  {
    path: "/world",
    name: "World",
    component: HelloWorld,
  },
  {
    path: "/test",
    name: "Test",
    component: HelloTest,
  },
];

export default routes;
