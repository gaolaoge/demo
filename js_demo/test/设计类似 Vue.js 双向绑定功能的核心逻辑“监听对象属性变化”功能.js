// 实现一个类，可以监听对象属性的值变化。加分项：考虑对象存在值为数组或对象的属性。

class Observe {
    constructor(data) {
        this.data = { ...data };
    }
    // 监听属性变更
    $on() {
    }
    // 触发属性变更事件
    $emit() {
    }
}

const data = new Observer({
    a: 1
});

coonsole.log(data.a) // console: 1

data.$on('a', (newValue, oldValue) => {
    // this === data
    console.log(newValue, oldValue);
});

data.a = 2 // console: 2 1