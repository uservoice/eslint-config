module.exports = {
  extends: ['react-app', 'plugin:tailwindcss/recommended'],
  plugins: ['tailwindcss'],
  rules: {
    'no-mixed-operators': 0,
    'semi': ['error', 'always'],
    'quotes': ['error', 'single'],
    'jsx-quotes': ['error', 'prefer-double'],
    'comma-dangle': ['error', 'always-multiline'],
    'indent': 'off',
    '@typescript-eslint/indent': ['error', 2, { 'SwitchCase': 1 }],
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'import/no-relative-parent-imports': 'warn',
    'import/order': ['warn', {
      'newlines-between': 'always',
      'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
      'pathGroups': [
        { 'pattern': 'react', 'group': 'builtin' },
        { 'pattern': '@/**', 'group': 'internal' },
      ],
      'pathGroupsExcludedImportTypes': [],
      'alphabetize': {
        'order': 'asc',
        'caseInsensitive': true,
      },
    }],
    'no-multiple-empty-lines': 'error',
  },
  overrides: [
    {
      files: ['**/*.?(j|t)s?(x)'],
      rules: {
        'react-hooks/exhaustive-deps': 0,
      },
    },
    {
      files: ['**/*.stories.*'],
      rules: {
        'import/no-anonymous-default-export': 0,
      },
    },
  ],
};
