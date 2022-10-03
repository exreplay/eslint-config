import { Linter } from 'eslint';

module.exports = {
  env: {
    browser: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'standard'
  ],
  plugins: ['jest'],
  rules: {
    // #region ECMAScript 6
    'prefer-template': 'error',
    // #endregion

    // #region Best Practices
    eqeqeq: 'error',
    'no-useless-concat': 'error',
    'no-unused-expressions': 'error',
    'prefer-promise-reject-errors': [
      'error',
      {
        allowEmptyReject: true
      }
    ],
    radix: 'error',
    'no-new-wrappers': 'error',
    // #endregion

    // #region Possible Errors
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // #endregion

    camelcase: 'off',
    'no-undef': 'off',

    'import/first': 'off',
    'import/named': 'off',
    'import/namespace': 'off',
    'import/default': 'off',
    'import/no-named-as-default-member': 'off'
  }
} as Linter.Config;
