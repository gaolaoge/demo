// 为所有数组对象添加一个findDuplicate(n)方法，用于返回该数组中出现频率>=n的元素列表

Array.prototype.findDuplicate = function (n) {
    if (isNaN(n)) {
        return []
    }

    const temp = {}
    this.forEach(item => {
        if (temp[item]) {
            temp[item] += 1
        } else {
            temp[item] = 1
        }
    })

    return Object.keys(temp).filter(item => temp[item] >= n)

}


// 测试代码 
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 10, 7, 7];
var res = arr.findDuplicate(2);
console.log(res);

