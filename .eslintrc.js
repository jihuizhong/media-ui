// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential', 
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "indent": [2, 4],
    "semi": [2, "always"],//语句强制分号结尾
    "space-before-function-paren": 0,  // 函数定义时括号前面要不要有空格
    "key-spacing": [1, {  // 对象字面量中冒号的前后空格
        "beforeColon": false,
        "afterColon": true
    }],
    "quotes": [2, "double", {"avoidEscape": true}], //引号风格
  }
}
