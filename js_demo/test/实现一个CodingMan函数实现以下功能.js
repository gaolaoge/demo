/**
 * 实现一个CodingMan，可以按照以下方式调用:
 * CodingMan(“Hank”)输出:
 * Hi! This is Hank!
 * 
 * CodingMan(“Hank”).sleep(10).eat(“dinner”)
 * 输出
 * Hi! This is Hank!
 * //等待10秒..
 * Wake up after 10
 * Eat dinner~
 * 
 * CodingMan(“Hank”).eat(“dinner”).eat(“supper”)
 * 输出
 * Hi This is Hank!
 * Eat dinner~
 * Eat supper~
 * 
 * CodingMan(“Hank”).sleepFirst(5).eat(“supper”)
 * 输出
 * //等待5秒
 * Wake up after 5
 * Hi This is Hank!
 * Eat supper
 * 以此类推。
*/

class _CodingMan {
    constructor(name) {
        this.name = name
        this.list = []
        this.list.push(() => console.log(`Hi! This is ${this.name}`))
        setTimeout(() => {
            this.next()
        }, 0)
        return this
    }

    next() {
        if (this.list.length === 0) {
            return
        }
        debugger
        const fn = this.list.shift()
        debugger
        Promise.resolve(fn()).then(this.next.bind(this))
    }

    eat(food) {
        this.list.push(() => console.log(`Eat ${food}~`))
        return this
    }

    sleep(time) {
        this.list.push(
            () => this._sleep(time),
            () => console.log(`Wake up after ${time}`)
        )
        return this
    }

    _sleep(time) {
        return new Promise(resolve => setTimeout(resolve, time * 1000))
    }

    sleepFirst(time) {
        this.list.unshift(
            () => this._sleep(time),
            () => console.log(`Wake up after ${time}`)
        )
        return this
    }
}

function CodingMan(name) {
    return new _CodingMan(name)
}

// CodingMan("Hank")
// CodingMan("Hank").sleep(3).eat("dinner")
// CodingMan("Hank").eat("dinner").eat("supper")
CodingMan("Hank").sleepFirst(5).eat("supper")