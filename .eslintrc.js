
module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
      sourceType: 'module'
  },
  env: {
      browser: true
  },
  extends: 'eslint:recommended',
  rules: {
      // allow paren-less arrow functions
      'arrow-parens': 0,
      // allow async-await
      'generator-star-spacing': 0,
      'indent': ['error', 2, {
          'SwitchCase': 1
      }],
      'quotes': ['error', 'single'],
      'semi': ['error', 'never'],
      'no-return-assign': 0,
      'space-before-function-paren': ['error', {
          'anonymous': 'always',
          'named': 'never',
          'asyncArrow': 'always'
      }],
      'no-unused-expressions': ['error', {
          'allowTaggedTemplates': true,
          'allowShortCircuit': true,
          'allowTernary': true
      }],
      "react/jsx-uses-react": "error",
      "react/jsx-uses-vars": "error",
      "experimentalDecorators": 0,
      'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn"
  },
  plugins: ['react', "react-hooks"],
  globals: { }
}