
function repeat(func, times, wait) {
    if (isNaN(times) || isNaN(wait)) {
        return
    }
    return (text) => {
        let _times = times
        const cb = () => {
            if (_times <= 0) {
                return
            }
            setTimeout(() => {
                func(text)
                cb()
            }, wait)
            _times--
        }
        cb()
    }
}

// 使下面调用代码能正常工作
const repeatFunc = repeat(console.log, 4, 3000);
repeatFunc("hello world");    //会输出4次 hello world, 每次间隔3秒

