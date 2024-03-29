import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Blog from "../views/Blog.vue";
import Login from "../views/auth/Login.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog,
  },
  {
    path: "/auth/login",
    name: "Login",
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "text-primary",
});

export default router;
