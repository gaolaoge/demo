function fn1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(1)
        }, 1000);
    })
}
function fn2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(2)
        }, 2000);
    })
}

Promise.all([fn1(), fn2()]).then(res => {
    console.log(res)
}).catch(err => {
    console.log(err)
})

function PromiseAll(fns) {

}

PromiseAll([fn1(), fn2()]).then(res => {
    console.log(res)
}).catch(err => {
    console.log(err)
})