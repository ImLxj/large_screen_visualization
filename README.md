## 大屏数据可视化

### 项目准备

#### 1、插件安装

```js
// 屏幕适配插件 -- lib-flexible
npm i lib-flexible

// 将px -> rem 插件 -- postcss-plugin-px2rem
npm i postcss-plugin-px2rem --dev
```

#### 2、确定设计稿分辨率大小（比如1920*1080）

在`main.js`当中吧`lib-flexible`导入进来

```js
import libFlexible from 'lib-flexible'

Vue.use(libFlexible)
```

这样`flexible.js`源文件里面的将宽度十等分就不够用了，需要调整大小，将宽度24等分这样分完之后`1rem = 80px`

```js
function refreshRem(){
    var width = docEl.getBoundingClientRect().width;
    // 最小1366px 最大适配2560
    if (width / dpr < 1366) {
        width = 1366 * dpr;
    }else if (width / dpr > 2560) {
        width = 2560 * dpr
    }
    var rem = width / 24;
    docEl.style.fontSize = rem + 'px';
    flexible.rem = win.rem = rem;
}
```

然后在将`postcss-plugin-px2rem`在vue.config.js当中配置一下

```js
const postcssPluginPx2rem = require('postcss-plugin-px2rem')

module.exports = {
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          postcssPluginPx2rem({
            rootValue: 80,
            propBlackList: ['border', 'min-width', 'max-width']
          })
        ]
      }
    }
  }
}

```

