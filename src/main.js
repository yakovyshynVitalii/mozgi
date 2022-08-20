import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// style

import "@/assets/css/main.css";

// i18n

import { createI18n } from "vue-i18n";

const i18n = createI18n({
  legacy: false,
  fallbackLocale: "en",
  warnHtmlMessage: false,
});

// app

createApp(App).use(i18n).use(store).use(router).mount("#app");
