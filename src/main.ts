import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import zhCn from "element-plus/es/locale/lang/zh-cn";
import "animate.css";
import "./assets/index.scss";
import "./mock/index";
import directives from "./directive/index";

const app = createApp(App);
directives.install(app);
app
  .use(store)
  .use(router)
  .use(ElementPlus, {
    size: "small",
    zIndex: 3000,
    locale: zhCn,
  })
  .mount("#app");
