export default interface DigitsType {
    new(value: number): this

    /**
     * 值
     */
    value: number

    /**
     * 返回格式化数字
     */
    format(): string
}