module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'prettier'],
  plugins: [],
  rules: {
    quotes: ['error', 'single'],
    indent: 'off',
    'no-extra-semi': 'error',
    'semi-style': ['error', 'last'],
    'vue/require-component-is': 'off',
    'vue/comment-directive': 'off',
    'template-curly-spacing': 'off',
    'vue/valid-v-slot': 'off',
    'vue/no-v-html': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/first-attribute-linebreak': 'off',
    'comma-dangle': [
      'error',
      {
        arrays: 'never',
        objects: 'never',
        imports: 'never',
        exports: 'never',
        functions: 'never'
      }
    ]
  }
}
