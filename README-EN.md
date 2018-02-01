# layit.css

[English](./README-EN.md) | [Chinese](./README.md)

Simple Layout Framework Based On Flexbox.

## Install

```
npm i -S layit.css
```

### import scss
```scss
@import "~layit.css";
```
> If you use sass, please add [autoprefixer](https://github.com/postcss/autoprefixer) in your build system.

### import css

```scss
@import "~layit.css/lib/layit.css";
```

## Usage

+ [row layout demo](https://jeffwcx.github.io/layit/examples/row.html)

+ [grid system demo](https://jeffwcx.github.io/layit/examples/grid.html)

+ [col layout demo](https://jeffwcx.github.io/layit/examples/col.html)

## Customization

+ change `l-` prefix to `layout-`
  ```scss
  $prefix: "layout-";
  @import "../../../src/index";
  ```
+ grid system

  change unit number
  ```scss
  $units: 4;
  @import "../../../src/index";
  ```
  change gap

  ```scss
  $level: 2;
  $rate: 5px;
  @import "../../../src/index";
  ```

## Copyright
Copyright (c) 2018 Jeff Wang. See [LICENSE](./LICENSE) for details.