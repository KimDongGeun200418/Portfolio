//기본 경로

//메인페이지
import MainPageView from "@/views/MainPageView.vue";
import TestPageView from "@/views/TestPageView.vue";

//자식
import PortfolioMain from "@/components/Portfolio/PortfolioMain.vue";
import PortfolioJSP from "@/components/Portfolio/PortfolioJSP.vue";
import PortfolioVue from "@/components/Portfolio/PortfolioVue.vue";
import PortfolioSpring from "@/components/Portfolio/PortfolioSpring.vue";

let routes = [
  {
    path: "/",
    name: "Index",
    component: MainPageView,
    children: [
      { path: "", component: PortfolioMain, meta: { title: "Portfolio KDG" } },
      {
        path: "JSP",
        component: PortfolioJSP,
        meta: { title: "Portfolio JSP" },
      },
      {
        path: "Vue",
        component: PortfolioVue,
        meta: { title: "Portfolio Vue" },
      },
      {
        path: "Spring",
        component: PortfolioSpring,
        meta: { title: "Portfolio Spring" },
      },
    ],
  },
  {
    path: "/test",
    name: "Test",
    component: TestPageView,
  },
];

export default routes;
