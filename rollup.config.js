import { getBabelOutputPlugin } from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";

export default {
  input: "src/index.js",
  output: {
    file: "lib/index.min.js",
    name: "whatsElement",
    format: "esm",
  },
  plugins: [
    getBabelOutputPlugin({
      presets: [
        [
          "@babel/preset-env",
          {
            loose: true,
            modules: "umd",
            targets: [
              "> 0.25%, not dead",
              "ios >= 90",
              "ie >= 10",
              "android >= 4.4",
              "chrome >= 30",
            ],
          },
        ],
      ],
    }),

    terser({
      compress: {
        pure_funcs: ["console.log"]
      },
    })
  ],
};
