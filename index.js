module.exports = {
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2018,
    sourceType: 'module',
  },

  env: {
    browser: true,
  },

  settings: {
    // Aliases
    'import/resolver': {
      alias: {
        map: [
          ['src', './src'],
        ],
        extensions: ['.js', '.ts', '.vue'],
      },
    },
  },

  extends: [
    'eslint:recommended',
    'airbnb-base',
  ],

  rules: {
    // Standard Rules
    semi: ['error', 'never'],
    'space-before-function-paren': ['error', 'always'],
    'arrow-parens': ['error', 'as-needed'],
    'brace-style': ['error', 'stroustrup', { allowSingleLine: true }],
    'no-console': process.env.NODE_ENV === 'production'
      ? ['error', { allow: ['warn', 'error'] }]
      : 'off',
    'no-param-reassign': ['error', { props: false }],

    // Import Rules
    'import/prefer-default-export': 'off',
    'import/extensions': ['error', 'always', {
      js: 'never',
      ts: 'never',
      vue: 'never',
    }],
  },

  // Unit Test
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
}
