import { Linter } from 'eslint';

module.exports = {
  extends: [
    './rules/base',
    './rules/unicorn',
    './rules/typescript',
    './rules/vue',
    './rules/prettier'
  ].map((rule) => require.resolve(rule))
} as Linter.Config;
