process.nextTick(() => { console.log('nextTick') })
Promise.resolve().then(() => { console.log('promise1'); }).then(() => {
    console.log('promise2');
});
setImmediate(() => { console.log('setImmediate') })
console.log('end') 