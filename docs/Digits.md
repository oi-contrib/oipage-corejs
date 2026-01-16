# Digits 数字

```js
import { Digits } from "@oipage/core.js"
let digits = new Digits(value)
```

参数value可选，默认0。

返回的digits有如下属性：

- value：number类型，表示值

## format

返回格式化数字

```js
let str = digits.format()
```