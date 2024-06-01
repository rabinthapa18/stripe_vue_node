import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

let envConfig = require("./config.development");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  define: {
    "import.meta.env.VUE_APP_STRIPE": JSON.stringify(envConfig.VUE_APP_STRIPE),
  },
  server: {
    port: 5000,
    host: "0.0.0.0",
  },
});
