module.exports = {
  extends: 'erb',
  plugins: ['@typescript-eslint', 'boundaries'],
  rules: {
    // A temporary hack related to IDE not resolving correct package.json
    'import/no-extraneous-dependencies': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/no-import-module-exports': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'no-return-await': 'off',
    'no-console': 'off',
    'import/prefer-default-export': 'off',
    'no-useless-catch': 'off',
    'react/function-component-definition': 'off',
    'dot-notation': 'off',
    'no-underscore-dangle': 'off',
    'boundaries/element-types': [
      2,
      {
        default: 'disallow',
        rules: [
          {
            from: ['main'],
            allow: ['main', 'shared'],
          },
          {
            from: ['renderer'],
            allow: ['renderer', 'shared'],
          },
          {
            from: ['shared'],
            allow: ['shared', 'main'],
          },
        ],
      },
    ],
  },
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      // See https://github.com/benmosher/eslint-plugin-import/issues/1396#issuecomment-575727774 for line below
      node: {},
      webpack: {
        config: require.resolve('./.erb/configs/webpack.config.eslint.ts'),
      },
      typescript: {},
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'boundaries/elements': [
      {
        type: 'main',
        pattern: 'src/main',
      },
      {
        type: 'renderer',
        pattern: 'src/renderer',
      },
      {
        type: 'shared',
        pattern: 'src/shared',
      },
    ],
  },
  overrides: [
    {
      files: ['src/main/**/*.ts'],
      rules: {
        'no-restricted-imports': [
          'error',
          {
            paths: [
              '@prisma/client',
              '@main/lib/data-access-db/generated',
              '@main/lib/prisma-client',
            ],
          },
        ],
      },
    },
  ],
};
