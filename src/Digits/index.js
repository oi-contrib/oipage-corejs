import { numberFormat } from "oipage/web/format/index"

export function Digits(value = 0) {
    this.value = value
}

Digits.prototype.format = function () {
    return numberFormat(this.value)
}