// 问题:1234567890 --> 1,234,567,890

function formatCash(num) {
    let str = ''
    let index = 0

    if (num.length % 3 !== 0) {
        index = num.length % 3
        str = num.slice(0, num.length % 3 + 1)
        str += ','
    }

    while (index < num.length) {
        str += num.substring(index, index + 3)
        if (index + 3 < num.length) {
            str += ','
        }
        index += 3
    }

    return str
}

const num = '1234567890'
const res = formatCash(num)

console.log(res)