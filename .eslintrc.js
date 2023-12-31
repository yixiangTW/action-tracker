module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts', '.js'],
      },
    },
  },
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'no-plusplus': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/extensions': 'off',
    'react/jsx-filename-extension': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'global-require': 'off',
    'react/jsx-no-constructed-context-values': 'off',
    'no-underscore-dangle': ['error', { allow: ['_count'] }],
    'no-param-reassign': 'off',
  },
};
