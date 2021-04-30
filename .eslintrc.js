module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint'
  ],
  ignorePatterns: ["reporter.ts"],
  rules: {
    "semi": [2, "always"],
    "indent": "off",
    "no-tabs": 0
  },
  env: {
    "jasmine": true
  }
}
