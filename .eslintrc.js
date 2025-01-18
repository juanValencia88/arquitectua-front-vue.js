module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true, // Agrega esto para que ESLint reconozca `process`
  },
  extends: [
    "plugin:vue/essential",
    "eslint:recommended",
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  rules: {
    "vue/multi-word-component-names": "off",
  },
};
