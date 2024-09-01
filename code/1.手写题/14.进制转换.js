// 进制进制转换
function fn(num, jz) {
    let n = Math.abs(num)
    const mapStr = '0123456789abcdefg'

    if (n < jz) return String(num)
    let ret = ''
    while (n > 0) {
        const y = mapStr[n % jz]
        ret = `${y}${ret}`
        n = Math.floor(n / jz)
    }
    return num < 0 ? `-${ret}` : ret
}

const num = 17
console.log(fn(num, 16))
console.log(num.toString(16))
