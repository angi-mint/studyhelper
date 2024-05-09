import {defineConfig} from "vite";
import {resolve} from "path";

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                analytics: resolve(__dirname, 'sites/analytics.html'),
                settings: resolve(__dirname, 'sites/settings.html'),
                linkmap: resolve(__dirname, 'sites/linkmap.html'),
            }
        }
    }
});