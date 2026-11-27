import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Legacy site, removed at launch (Paso 5).
    "css/**",
    "js/**",
    "vendor/**",
    "php/**",
  ]),
]);

export default eslintConfig;
