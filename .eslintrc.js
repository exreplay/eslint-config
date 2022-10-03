// @ts-check
/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.eslint.json']
  },
  extends: ['./dist/index.js']
};

