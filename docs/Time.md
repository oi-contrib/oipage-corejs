# Time 时间&日期

```js
let time = new Time(date, format)
```

其中date和format都可选，分别表示：

- date表示当前维护的日期，可以是字符串或Date对象，默认今天
- format是一个json，有两个可选属性`input`和`outout`，用以定义输入和输出字符串格式，默认值都是"yyyy/MM/dd"

返回的time有如下属性：

- year：number类型，表示年
- month：number类型，表示月
- day：number类型，表示日

## valueOf

按照format.outout格式返回当前维护的日期

```js
let datestr = time.valueOf()
```

## addYear

新增year年后的日期（如果year为负数，就是减少）：

```js
time.addYear(year: number)
```

## addMonth

新增month月后的日期（如果month为负数，就是减少）：

```js
time.addMonth(month: number)
```

## addDay

新增day天后的日期（如果day为负数，就是减少）：

```js
time.addDay(day: number)
```