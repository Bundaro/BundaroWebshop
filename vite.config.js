import { defineConfig } from "vite";

const path = require("path");

export default defineConfig({
    base: '/Bundaro/',
    srcDir: "src",
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        }
    }
})