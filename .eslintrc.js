module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    ecmaVersion: 12,
    ecmaFeatures: {
      jsx: true
    },
    parser: "babel-eslint"
  },
  rules: {
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off"
  }
};
