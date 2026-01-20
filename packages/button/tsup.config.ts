import { defineConfig } from "tsup"
import fs from "fs";

export default defineConfig({
  entry: ["./src/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  clean: true,
  sourcemap: true,
  external: ["react", "react-dom"],
  tsconfig: "./tsconfig.json",
  onSuccess: async () => {
    return await fs.copyFileSync("src/style.css", "dist/style.css");
  }
})