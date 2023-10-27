var a = 1, b = 2;
function swap(a, b) {
    a += b
    b = a - b
    a -= b
    return [a, b]
}
[a, b] = swap(a, b)
console.log(a, b)  // 2,1