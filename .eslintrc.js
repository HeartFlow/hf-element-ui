module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true
  },
  extends: [
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard',
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow comma-dangle
    'comma-dangle': [1, "only-multiline", {
        "arrays": "always",
        "objects": "always",
        "imports": "always",
        "exports": "always",
        "functions": "never",
    }],
    // allow async-await
    'generator-star-spacing': 0,
    // allow end-of-line comments to have multiple spaces before them
    'no-multi-spaces': ["error", { ignoreEOLComments: true }],
    'space-before-function-paren': ['error', {
      'anonymous': 'never',
      'named': 'never',
      'asyncArrow': 'ignore'
    }],
    // allow new syntax
    'no-new': 0,
  },
};
