import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt()
  .prepend()
  .override("nuxt/typescript/setup", {
    rules: {
      "vue/html-self-closing": "off",
    },
  });
