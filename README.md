# vre

> Vite + React + Eslint

## ESLINT
`npx eslint --init` 初始化eslint配置

使用React-Airbnb规则
```Javascript
  // .eslintrc.cjs
  ...
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  ...
```

在Vite中支持import的别名：安装eslint-import-resolver-alias依赖并且添加：
```Javascript
  // .eslintrc.cjs
  ...
  settings: {
    'import/resolver': {
      alias: [
        ['@', './src'],
      ],
    },
  },
  ...
```

在VSCode的setting.json中加入如下配置，即可在保存文件时自动按eslint规则修复代码
```JavaScript
 "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
 }
```

## tailwindcss
https://www.tailwindcss.cn/

`tailwind.config.cjs` 和 `postcss.config.cjs`

## Redux Toolkit

> createSlice方法创建切片，生成reducer和actions，比react-redux简单快捷很多。创建切片需要一个字符串名称（name）来标识切片、一个初始状态值（initialState）以及一个或多个减速器（reducer）函数来定义如何更新状态。创建切片后，我们可以导出生成的 Redux action creators 和整个切片的 reducer 函数。

1. [Redux Toolkit](https://redux-toolkit.js.org/)

2. [Redux 最佳实践 Redux Toolkit 🔥🔥](https://juejin.cn/post/7101688098781659172#comment)
