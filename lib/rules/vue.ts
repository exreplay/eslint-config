import { Linter } from 'eslint';

module.exports = {
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly'
  },
  parser: 'vue-eslint-parser',
  extends: ['plugin:vue/vue3-recommended'],
  plugins: ['vue'],
  rules: {
    // #region Strongly Recommended
    'vue/attribute-hyphenation': 'error',
    'vue/v-bind-style': 'error',
    'vue/v-on-style': 'error',
    'vue/v-slot-style': 'error',
    // #endregion

    // #region Recommended
    'vue/no-lone-template': 'error',
    'vue/this-in-template': 'error',
    // #endregion

    // #region Uncategorized
    'vue/html-comment-content-newline': 'error',
    'vue/html-comment-content-spacing': 'error',
    'vue/html-comment-indent': ['error', 2],
    'vue/no-useless-mustaches': 'error',
    'vue/padding-line-between-blocks': 'error',
    // #endregion

    // #region Extension Rules
    'vue/dot-notation': 'error',
    'vue/eqeqeq': 'error',
    'vue/no-empty-pattern': 'error',
    'vue/no-irregular-whitespace': 'error',
    'vue/no-sparse-arrays': 'error',
    'vue/no-useless-concat': 'error',
    'vue/prefer-template': 'error',
    // #endregion

    'vue/no-v-html': 'off',
    'vue/multi-word-component-names': 'off'
  }
} as Linter.Config;
