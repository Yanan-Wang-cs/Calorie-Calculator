module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        // "plugin:prettier/recommended"
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
    },
    "plugins": [
        "react"
    ],
    "rules": {
        /**
         * 常规配置
         */
        // 0:关闭 1:警告 2:报错
        quotes: [1, 'single'], // 强制使用一致的单引号
        semi: [2, 'never'], // 强制是否使用分号
        'no-shadow': 0, // 关闭:函数参数名与全局作用域名重复
        'no-console': 0, // 允许使用console
        'prefer-const': 0, // 关闭建议使用const
        'max-len': 0, // 关闭最大长度校验
        'no-useless-escape': 0, // 关闭正则表达式中不规则数据校验
        'implicit-arrow-linebreak': 0, // 关闭在箭头函数体之前不允许换行
        'object-curly-newline': 0, // 关闭在对象文字或解构赋值的大括号内强制执行一致的换行符
        'arrow-parens': 0, // 关闭箭头函数只有一个参数时要带括号
        'max-classes-per-file': 0, // 关闭只能暴露一个类
        'no-plusplus': 0, // 关闭i++报错
        'prefer-destructuring': 0, // 关闭强制执行解构
        'no-param-reassign': 0, // 关闭不能修改函数参数 setCount(state: State, count: number) state.count = count
        'no-use-before-define': [1, 'nofunc'], // 未定义前不能使用
        'vue/no-unused-components': 'off', // 当存在定义而未使用的组件时，关闭报错
        "no-multi-spaces": 2, // 禁止出现多个空格
        "camelcase": 2, // 要求使用骆驼拼写法
        "comma-dangle": [2, 'always-multiline'], // 要求或禁止使用拖尾逗号
        "lines-around-comment": 2, // 强制注释周围有空行
        "new-cap": 2, // 要求构造函数首字母大写
    },
    "settings": {
        'import/resolver': {
          // 解决引入问题及别名
          alias: {
            map: [['@', './src']],
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
          },
        },
      },
}
