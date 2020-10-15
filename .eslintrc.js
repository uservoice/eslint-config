module.exports = {
  extends: ['react-app', 'plugin:tailwind/recommended'],
  rules: {
    'no-mixed-operators': 0,
    'semi': [2, 'always'],
    'quotes': ['error', 'single'],
    'jsx-quotes': ['error', 'prefer-double'],
    'comma-dangle': ['error', 'always-multiline'],
    'indent': ['error', 2, {'SwitchCase': 1}],
    'no-console': ['error', { allow: ['warn', 'error'] }],
  },
  overrides: [{
    files: ['**/*.?(j|t)s?(x)'],
    rules: {
      'react-hooks/exhaustive-deps': 0,
    },
  }],
};
