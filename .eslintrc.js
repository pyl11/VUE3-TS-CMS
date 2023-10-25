module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    //'@vue/prettier',
    //'@vue/prettier/@typescript-eslint',
    //'plugin:prettier/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // '@typescript-eslint/no-var-requires': 'off',
    // '@typescript-eslint/no-unused-vars': 'off', //解决vue.config.js  selint path警告问题
     'vue/multi-word-component-names': 'off' //解决 组件名"Login"应该总是多个单词，组件名称命名不规范，未用驼峰命名法。
    
  }
}
