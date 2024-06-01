import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "donation",
    component: () => import("./components/DonationForm.vue"),
  },
  {
    path: "/success",
    name: "success",
    component: () => import("./components/Success.vue"),
  },
  {
    path: "/error",
    name: "error",
    component: () => import("./components/Error.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
