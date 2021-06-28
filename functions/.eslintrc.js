module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'google',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['tsconfig.json', 'tsconfig.dev.json'],
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  ignorePatterns: [
    '/lib/**/*', // Ignore built files.
  ],
  plugins: [
    '@typescript-eslint',
    'import',
  ],
  rules: {
    'semi': [2, 'never'],
    'no-shadow': 'warn',
    'jsdoc/newline-after-description': 0,
    'jsdoc/require-param-type': 0,
    'jsdoc/require-returns-type': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/array-type': 'off',
    '@typescript-eslint/no-object-literal-type-assertion': 'off',
  },
  overrides: [
    {
      files: ['./index.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 0,
      },
    },
    {
      files: ['scripts/testSetup.ts'],
      rules: {
        '@typescript-eslint/no-unused-vars': 0,
      },
    },
    {
      files: ['src/**/*.spec.ts', 'src/**/*.spec1.ts'],
      env: {
        jest: true,
      },
      globals: {
        functionsTest: true,
        projectId: true,
      },
      rules: {
        'no-console': 0,
        'node/no-path-concat': 0,
        'no-unused-expressions': 0,
        'import/no-dynamic-require': 0,
        'import/prefer-default-export': 0,
      },
    },
  ],
}
