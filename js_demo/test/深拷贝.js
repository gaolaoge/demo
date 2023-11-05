function deepClone(origin) {
    if (typeof origin !== 'object' || origin === null) {
        return origin;
    }
    const res = Array.isArray(origin) ? [] : {}
    for (const key in origin) {
        res[key] = deepClone(origin[key])
    }
    return res
}

const res = deepClone({
    a: 1,
    b: {
        c: 2,
    },
    d: [3, 4, 5],
})

console.log(res)