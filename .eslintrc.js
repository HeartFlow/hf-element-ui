module.exports = {
  root: true,
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    // allow comma-dangle
    'comma-dangle': [1, 'only-multiline', {
      'arrays': 'always',
      'objects': 'always',
      'imports': 'always',
      'exports': 'always',
      'functions': 'never',
    }],

    'generator-star-spacing': 0,

    // allow end-of-line comments to have multiple spaces before them
    'no-multi-spaces': ['error', { ignoreEOLComments: true }],

    'space-before-function-paren': ['error', {
      'anonymous': 'never',
      'named': 'never',
      'asyncArrow': 'ignore'
    }],

    /* Vue */
    'vue/array-bracket-spacing': 'error',
    'vue/arrow-spacing': 'error',
    'vue/block-spacing': 'error',

    'vue/component-name-in-template-casing': ['error', 'kebab-case'],

    'vue/html-closing-bracket-newline': ['error', {
      'singleline': 'never',
      'multiline': 'never'
    }],

    'vue/max-attributes-per-line': ['error', {
      'singleline': 5,
      'multiline': {
        'max': 5,
        'allowFirstLine': true
      }
    }],

    // allow elements to contain content on a single line
    'vue/singleline-html-element-content-newline': 0,
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
