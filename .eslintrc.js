module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true
  },
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  rules: {
    'comma-dangle': [ 'off' ],
    'no-extra-bind': [ 'off' ],
    'no-mixed-operators': [ 'off' ],
  },
  globals: {}
}
