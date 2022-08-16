import { createWebHistory, createRouter } from "vue-router";
import { RouteRecordRaw } from "vue-router";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    alias: "/tutorials",
    name: "turorials",
    component: () => import("./components/TotorialsList.vue")
  },
  {
    path: "/tutorials/:id",
    name: "turorials-details",
    component: () => import("./components/TotorialDetails.vue")
  },
  {
    path: "/add",
    name: "add",
    component: () => import("./components/AddTutorial.vue")
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;