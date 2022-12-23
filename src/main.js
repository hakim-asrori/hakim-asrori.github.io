import { createApp } from "vue";
import "./assets/css/style.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Cookies from "js-cookie";
import BackToTop from "vue-backtotop";
import VueSmoothScroll from "v-smooth-scroll";

createApp(App)
  .use(router)
  .use(store)
  .use(BackToTop)
  .use(VueSmoothScroll)
  .mount("#app");

const appTheme = Cookies.get("theme");
const darkToggle = document.querySelector("#dark-toggle");

if (appTheme === "dark") {
  document.documentElement.classList.add("dark");
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
  document.documentElement.classList.remove("dark");
}
