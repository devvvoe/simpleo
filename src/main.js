import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import components from "@/views/UI";
import store from "./store";

const app = createApp(App);
components.forEach((component) => {
  app.component(component.name, component);
});
app.use(store).use(router).mount("#app");
