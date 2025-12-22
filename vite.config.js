import * as fs from "fs/promises";
import {defineConfig} from "vite";
import {version} from "./package.json";

// https://vite.dev/config/
export default defineConfig({
    base: "",
    plugins: [{
        apply: "build",
        writeBundle: () => fs.writeFile("docs/.nojekyll", "", "utf-8"),
    }],
    define: {
        'import.meta.env.VITE_APP_VERSION': JSON.stringify(version),
    },
    build: {
        outDir: "docs",
        emptyOutDir: true,
    }
});
