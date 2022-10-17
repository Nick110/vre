module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  settings: {
    'import/resolver': {
      alias: [
        ['@', './src'],
      ],
    },
  },
  rules: {
    // 'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 没有依赖
    'import/no-extraneous-dependencies': 'off',
    'max-len': 'off',
    'linebreak-style': [0, 'error', 'windows'],
    'import/extensions': 0,
    'import/order': 0,
    'no-console': 0,
    'no-unused-vars': 0,
    'react/button-has-type': 0,
    'react/prop-types': 0,
  },
};
