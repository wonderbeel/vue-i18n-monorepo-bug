import { defineConfig, searchForWorkspaceRoot } from "vite";
import path from "path";
import vueI18n from "@intlify/vite-plugin-vue-i18n";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueI18n({
      include: path.resolve(__dirname, "../../packages/locales/**"),
    }),
  ],
  server: {
    fs: {
      allow: [searchForWorkspaceRoot(process.cwd()), "../../packages"],
    },
  },
});
