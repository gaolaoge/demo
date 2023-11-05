var arr = [1, 2, 3, 4, 5, 6]

const fn = (arr) => {
    return arr.map(item => ({
        val: item,
        key: Math.random()
    })).sort((a, b) => a.key - b.key).map(({ val }) => val)
}

console.log(fn(arr))