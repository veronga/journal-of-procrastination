module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  env: {
    jest: true
  },
  rules: {
    'no-use-before-define': 'off',
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'comma-dangle': 'off',
    'global-require': 0,
    'arrow-parens': 0,
    'object-curly-newline': 0
  },
  globals: {
    fetch: false
  }
};
