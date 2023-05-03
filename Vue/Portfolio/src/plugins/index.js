/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import { loadFonts } from "./webfontloader";
import vuetify from "./vuetify";
import router from "@/routers";
import { createPinia } from "pinia";
const store = createPinia();

export function registerPlugins(app) {
  loadFonts();
  app.use(vuetify).use(store).use(router);
}
