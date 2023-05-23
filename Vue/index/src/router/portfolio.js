//기본 경로

import PortfolioJSP from "@/components/Portfolio/PortfolioJSP.vue";
import PortfolioVue from "@/components/Portfolio/PortfolioVue.vue";
import PortfolioSpring from "@/components/Portfolio/PortfolioSpring.vue";

let routes = [
  {
    path: "/JSP",
    name: "JSP",
    component: PortfolioJSP,
  },
  {
    path: "/Vue",
    name: "Vue",
    component: PortfolioVue,
  },
  {
    path: "/Spring",
    name: "Spring",
    component: PortfolioSpring,
  },
];

export default routes;
