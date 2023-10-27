function mergeSortedArray(a, b) {
    if ((!Array.isArray(a) || a.length === 0) && Array.isArray(b)) {
        return b
    }
    if ((!Array.isArray(b) || b.length === 0) && Array.isArray(a)) {
        return a
    }
    a = a.filter(v => !isNaN(v))
    b = b.filter(v => !isNaN(v))
    let i = 0, j = 0;
    const res = []
    while (i < a.length || j < b.length) {
        if (a[i] === undefined) {
            res.push(b[j])
            j++
        } else if (b[j] === undefined) {
            res.push(a[i])
            i++
        } else if (a[i] <= b[j]) {
            res.push(a[i])
            i++
        } else {
            res.push(b[j])
            j++
        }
    }
    return res
}


const res = mergeSortedArray([2, 5, 6, 9], [1, 2, 3, 29]);
console.log(res)
// 结果 [1, 2, 2, 3, 5, 6, 9, 29]