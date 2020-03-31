
# 展示頁面

<a href="https://hedgehogkucc.github.io/PixnetAlbum/#/index" target="_blank">https://hedgehogkucc.github.io/PixnetAlbum/#/index</a>

<br>

## 目錄

- [專案設定](#project-setting)
- [使用技術](#skills)
- [PIXNET API](#pixnet-api)
- [Element UI](#element-ui)
- [Vue-easy-lightbox](#vue-easy-lightbox)

<br>

<h2 id="project-setting">專案設定</h2>

```
npm install
```

<br>

### 開發時編譯和重載頁面
```
npm run serve
```

<br>

<h2 id="skills">使用技術</h2>

- Vue CLI 4
- JavaScript ( ES6...等 )
- [Element UI](https://element.eleme.io/#/zh-CN)
- [Vue-easy-lightbox](https://github.com/XiongAmao/vue-easy-lightbox/blob/master/README-CN.md)
- Axios ( 串接 [PIXNET API](https://developer.pixnet.pro/#!/doc/pixnetApi/oauthApi) )
- ESLint ( Airbnb )

<br>

<h2 id="pixnet-api">PIXNET API</h2>

參考 API：

- [列出單一相簿的所有相片(文件)](https://developer.pixnet.pro/#!/doc/pixnetApi/albumElements)
  - [範例](https://emma.pixnet.cc/album/elements?set_id=4555593&user=jiney&format=json)

<br>

依上述範例結果只會拿到一種格式的照片

如果要拿到完整圖片資訊需要加上 `with_detail="1"`

```
https://emma.pixnet.cc/album/elements?set_id=4555593&user=jiney&with_detail=1&format=json
```

<br>

<h2 id="element-ui">Element UI</h2>

按需引入

借助 `babel-plugin-component`

我們可以只引入需要的組件

首先

```bash
npm install babel-plugin-component -D
```

<br>

然後新增 `.babelrc` 內容為

```json
{
  "presets": [["es2015", { "modules": false }]],
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
```

<br>

或直接加在 `babel.config.js`  ( 推薦此方法 )

```
module.exports = {
  presets: [
    ['es2015', { modules: false }],
    '@vue/cli-plugin-babel/preset',
  ],
  plugins: [
    [
      'component',
      {
        libraryName: 'element-ui',
        styleLibraryName: 'theme-chalk',
      },
    ],
  ],
};

```

<br>

會報以下錯誤訊息

```bash
Error: Cannot find module 'babel-preset-es2015'
```

<br>

解決方法

- 安装 `@babel/preset-env`

```bash
npm i @babel/preset-env -D
```

- 把 `es2015` 改為 `@babel/preset-env`

<br>

開始引入所需組件

將 `import ElementUI from 'element-ui';` 改為

```js
import {
  Row, Col, Card,
} from 'element-ui';
```

```js
Vue.use(Row);
Vue.use(Col);
Vue.use(Card);
```

<br>

需要注意的是不能用以下寫法

```js
Vue.use(Row, Col, Card);
```

<br>

<h2 id="vue-easy-lightbox">Vue-easy-lightbox</h2>

傳進物件格式的屬性要為 `src` 和 `title` (Option)

這樣 `Computed` 才會抓到資料

```js
filterImg() {
  const vm = this;
  vm.imgs = vm.elements.map((item) => {
    const temp = {};
    temp.square = item.square;
    temp.src = item.large;
    temp.title = item.title;
    return temp;
  });
}
```
