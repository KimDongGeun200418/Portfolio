/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from "./App.vue";

// Composables
import { createApp } from "vue";
import { createPinia } from "pinia";
// Plugins
import { registerPlugins } from "@/plugins";
import router from "./routers/index.js";
const app = createApp(App);
registerPlugins(app);

const store = createPinia();
app.use(store);
app.use(router);

app.mount("#app");
