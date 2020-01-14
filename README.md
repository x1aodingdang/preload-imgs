## 这是一款图片预加载的插件 他返回的是一个 Promise.all 所以你可以使用 promise 的方法

### install

`npm i preload-imgs -S`

### use

```
import { preloadImgs } from 'preload-imgs';

preloadImgs(['http://test.png']).then( res => {
  // 所有图片加载完毕
}).catch( rej => {

})
```
