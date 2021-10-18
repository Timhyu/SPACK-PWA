module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2020
  },
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      typescript: {
        directory: './tsconfig.json'
      },
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  },
  rules: {
    semi: ['error', 'never'],
    camelcase: 0,
    'no-unused-vars': 'off',
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-param-reassign': 0,
    'no-underscore-dangle': 0,
    'no-plusplus': 0,
    'no-useless-escape': 0,
    'prettier/prettier': [
      'error',
      {
        semi: false,
        singleQuote: true,
        usePrettierrc: false,
        trailingCommas: 'none',
        fileInfoOptions: {
          withNodeModules: true
        }
      }
    ],
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off'
  }
}
