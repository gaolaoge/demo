// 代码实现
Array.prototype.map2 = function (fn) {
    return this.reduce((res, currentVal, index) => {
        res.push(fn(currentVal, index))
        return res
    }, [])
}

// 测试代码
var res = [1, 3, 5, 7].map2(function (item, idx) {
    return item * 2;
});

console.log(res);