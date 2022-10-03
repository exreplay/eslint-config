import { Linter } from 'eslint';

module.exports = {
  plugins: ['unicorn'],
  rules: {
    'unicorn/better-regex': 'error',
    'unicorn/catch-error-name': 'error',
    'unicorn/expiring-todo-comments': 'error',
    'unicorn/no-array-instanceof': 'error',
    'unicorn/no-hex-escape': 'error',
    // 'unicorn/numeric-separators-style': 'error',
    'unicorn/prefer-add-event-listener': 'error',
    'unicorn/prefer-includes': 'error',
    'unicorn/prefer-optional-catch-binding': 'error',
    'unicorn/prefer-text-content': 'error',
    'unicorn/throw-new-error': 'error'
  }
} as Linter.Config;
