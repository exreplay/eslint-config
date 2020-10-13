module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    ecmaFeatures: {
      legacyDecorators: true
    }
  },
  env: {
    browser: true,
    node: true
  },
  extends: [
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:vue/essential',
    'standard'
  ],
  plugins: [
    'vue',
    'unicorn'
  ],
  rules: {
    'import/no-unresolved': 'off',
    
    'generator-star-spacing': 'off',
  
    indent: ['error', 2],
      
    'no-tabs': 'off',

    'prefer-promise-reject-errors': ['error', {
      allowEmptyReject: true
    }],

    'no-multi-spaces': ['error', {
      exceptions: {
        ImportDeclaration: true
      }
    }],

    semi: ['error', 'always'],

    'space-before-function-paren': ['error', 'never'],
      
    'no-trailing-spaces': ['error', {
      skipBlankLines: true
    }],

    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    /**
     * Unicorn rules
     */
    'unicorn/better-regex': 'error',
    'unicorn/no-array-instanceof': 'error',
    'unicorn/no-hex-escape': 'error',
    'unicorn/no-process-exit': 'error',
    'unicorn/number-literal-case': 'error',
    'unicorn/prefer-add-event-listener': 'error',
    'unicorn/prefer-includes': 'error',
    'unicorn/prefer-optional-catch-binding': 'error',
    'unicorn/prefer-text-content': 'error',
    'unicorn/prefer-type-error': 'error',
    'unicorn/throw-new-error': 'error',


    /**
     * Vue rules
     */
    'vue/script-indent': ['error', 2, {
      baseIndent: 1
    }],
  
    'vue/html-indent': ['error', 2, {
      baseIndent: 1
    }],
  
    'vue/max-attributes-per-line': ['error', {
      singleline: 1,
      multiline: {
        max: 1,
        allowFirstLine: false
      }
    }],
  
    'vue/html-closing-bracket-newline': ['error', {
      singleline: 'never',
      multiline: 'always'
    }]
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        indent: 'off',
        'vue/script-indent': ['error', 2, { baseIndent: 1 }]
      }
    }
  ]
};
