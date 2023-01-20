import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { viteMockServe } from "vite-plugin-mock";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const { VITE_APP_MODE, VITE_BASE_URL } = loadEnv(mode, process.cwd());
  const isDev = VITE_APP_MODE === "development";

  return {
    plugins: [
      react(),
      viteMockServe({
        mockPath: "mock",
        localEnabled: command === "serve",
        // prodEnabled: false,
        //   injectCode: `
        //   import { setupProdMockServer } from './mockProdServer';
        //   setupProdMockServer();
        // `,
        logger: true,
      }),
    ],
    base: VITE_BASE_URL,
    server: {
      port: 3001,
      proxy: {
        "/api": {
          // 免费的在线REST API
          target: "http://jsonplaceholder.typicode.com",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    build: {
      sourcemap: isDev,
    },
  };
});
