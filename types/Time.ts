export default interface TimeType {
    new(date?: string | Date, format?: {

        /**
         * 输入格式
         */
        input?: "string"

        /**
         * 输出格式
         */
        outout?: "string"
    }): this

    /**
     * 年
     */
    year: number

    /**
     * 月
     */
    month: number

    /**
     * 日
     */
    day: number

    /**
     * 按照format.outout格式返回当前维护的日期
     */
    valueOf(): string

    /**
     * 新增year年后的日期（如果year为负数，就是减少）
     * @param year 
     */
    addYear(year: number): this

    /**
     * 新增month月后的日期（如果month为负数，就是减少）
     * @param month 
     */
    addMonth(month: number): this

    /**
     * 新增day天后的日期（如果day为负数，就是减少）
     * @param day 
     */
    addDay(day: number): this
}