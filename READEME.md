# layit.css

基于Flexbox的CSS布局框架，简单，易学


## 安装

```
npm i -S layit.css
```

### 引入scss
```scss
@import "~layit.css";
```
> 如果你在sass中引入scss，别忘了在你的构建系统中添加 [autoprefixer](https://github.com/postcss/autoprefixer)

### 引入css

```scss
@import "~layit.css/lib/layit.css";
```

## 使用

+ [行布局Demo](https://jeffwcx.github.io/layit/examples/row.html)

+ [栅栏格系统Demo](https://jeffwcx.github.io/layit/examples/grid.html)

+ [列布局Demo](https://jeffwcx.github.io/layit/examples/col.html)

## 定制

+ 将`l-`前缀改为`layout-`
  ```scss
  $prefix: "layout-";
  @import "../../../src/index";
  ```
+ 栅栏格系统

  更改栅栏格最大格子数
  ```scss
  $units: 4;
  @import "../../../src/index";
  ```
  更改格子间的排水沟
  ```scss
  $level: 2;
  $rate: 5px;
  @import "../../../src/index";
  ```

## 版权
Copyright (c) 2018 Jeff Wang. See [LICENSE](./LICENSE) for details.