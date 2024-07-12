/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    curly: ['error', 'multi-line'],
    eqeqeq: ['error', 'always'],
    semi: ['error', 'never'],
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
      },
    ],
    // quotes: ['error', 'single'],
    'key-spacing': [
      'error',
      {
        beforeColon: false,
        afterColon: true,
        mode: 'strict',
      },
    ],
    'no-empty': 'error',
    'no-else-return': 'error',
    'no-multi-spaces': 'error',
    'require-await': 'error',
    // 'brace-style': ['error', 'allman', { allowSingleLine: true }],
    'spaced-comment': ['error', 'always'],
    'arrow-spacing': 'error',
    'no-duplicate-imports': 'error',
    'comma-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],
    'default-case': 'error',
    'consistent-this': ['error', '_this'],
    'max-depth': ['error', 8],
    'max-lines': ['error', 800],
    'no-multi-str': 'error',
    'space-infix-ops': 'error',
    'space-before-blocks': ['error', 'always'],
    'space-before-function-paren': [
      'error',
      {
        named: 'never',
        anonymous: 'never',
        asyncArrow: 'always',
      },
    ],
    'keyword-spacing': ['error'],
    'prefer-const': 'error',
    'no-useless-return': 'error',
    'array-bracket-spacing': 'error',
    'no-useless-escape': 'off',
    'no-eval': 'error',
    'no-var': 'error',
    'no-with': 'error',
    'no-alert': 'warn',
    'no-console': 'off',
    'no-debugger': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/consistent-type-imports': 'error',
    'vue/multi-word-component-names': 'off',
    'vue/no-reserved-component-names': 'off',
    '@typescript-eslint/ban-types': 'off', // 禁用某个具体报错的规则
    '@typescript-eslint/no-explicit-any': 'off', // 示例：禁用 no-explicit-any 报错
  },
}
