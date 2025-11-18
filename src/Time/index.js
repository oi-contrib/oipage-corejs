import { dateFormat } from "oipage/web/format/index"
import { is } from "../tool"
import { calcMonthDays } from "./tool"

export function Time(date, format = {}) {
    this.inputFormat = format.input || "yyyy/MM/dd"
    this.outputFormat = format.output || "yyyy/MM/dd"

    // 字符串
    if (date && typeof date === "string") {
        let temp = dateFormat(date, {
            inputFormat: this.inputFormat
        }).split("/")

        this.year = +temp[0]
        this.month = +temp[1]
        this.day = +temp[2]
    }

    else {
        // 不是Date对象
        if (!is(date, "Date")) date = new Date()

        this.year = date.getFullYear()
        this.month = date.getMonth() + 1
        this.day = date.getDate()
    }
}

Time.prototype.valueOf = function () {
    return dateFormat(`${this.year}/${this.month}/${this.day}`, {
        format: this.outputFormat
    })
}

Time.prototype.addYear = function (year) {
    this.year += year
    return this
}

Time.prototype.addMonth = function (month) {
    let month1 = month % 12 // 零碎的月份
    this.year += (month - month1) / 12 // 整齐的年份

    if (month1 > 0) {
        let month2 = 12 - this.month // 新增月份剩余空间
        if (month2 >= month1) {
            this.month += month1
        } else {
            this.year += 1
            this.month = month1 - month2
        }
    } else if (month1 < 0) {
        if (this.month + month1 > 0) {
            this.month += month1
        } else {
            this.year -= 1
            this.month += 12 + month1
        }
    }

    let totalDay = calcMonthDays(this.year, this.month)
    if (totalDay < this.day) this.day = totalDay

    return this
}

Time.prototype.addDay = function (day) {
    let dateObj = new Date(+new Date(`${this.year}/${this.month}/${this.day}`) + (day * 86400000)) // 86400000 = 24 * 60 * 60 * 1000
    this.year = dateObj.getFullYear()
    this.month = dateObj.getMonth() + 1
    this.day = dateObj.getDate()
    return this
}