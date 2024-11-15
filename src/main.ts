import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import "./style.css";

import App from "./App.vue";
import Home from "./Home.vue";
import GenAiPreview from "./genai/Preview.vue";
import GenAiDashboard from "./genai/Dashboard.vue";
import GenAiSection1 from "./genai/Section1.vue";
import GenAiSection2 from "./genai/Section2.vue";
import GenAiSection3 from "./genai/Section3.vue";
import GenAiSection4 from "./genai/Section4.vue";

const routes = [
  { path: "/:catchAll(.*)", component: Home },
  { path: "/genai/preview", component: GenAiPreview },
  { path: "/genai/dashboard", component: GenAiDashboard },
  { path: "/genai/1", component: GenAiSection1 },
  { path: "/genai/2", component: GenAiSection2 },
  { path: "/genai/3", component: GenAiSection3 },
  { path: "/genai/4", component: GenAiSection4 },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(_to, _from, _savedPosition) {
    return { top: 0 };
  },
});

createApp(App).use(router).mount("#app");
