import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./stores/store";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faShoppingCart,
  faBagShopping,
  faTag,
  faBuilding,
  faCalendarDays,
  faCircleNotch,
  faUserAstronaut,
} from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(
  faShoppingCart,
  faBagShopping,
  faTag,
  faBuilding,
  faCalendarDays,
  faCircleNotch,
  faUserAstronaut
);

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(router);
app.use(store);

app.mount("#app");
