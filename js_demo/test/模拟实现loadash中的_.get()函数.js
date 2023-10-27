function get(target, ...paths) {
    // 请补全函数参数和实现逻辑
    const res = Array(paths.length).fill(undefined)
    paths.forEach((path, index) => {
        const steps = path.split('.')
        let obj = target
        debugger
        for (let step of steps) {
            if (/.\[\d+\]$/.test(step)) {
                // 数组索引
                const idx = step.match(/\[\d+\]$/)[0]
                const num = idx.match(/\d+/)[0]
                const name = step.substring(0, step.length - idx.length)
                obj = obj[name][num]
            } else {
                obj = obj[step]
            }
        }
        res[index] = obj
    })

    return res
}
const obj = { selector: { to: { toutiao: 'FE coder' } }, target: [1, 2, { name: 'byted' }] };
// 运行代码
const res = get(obj, 'selector.to.toutiao', 'target[0]', 'target[2].name')
console.log(res)

//  输出结果：
// ['FE coder', 1, 'byted']