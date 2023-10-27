function fn() {
    const loop = () => {
        setTimeout(() => {
            console.log(Date.now())
            loop()
        }, 1000)
    }
    loop()
}

fn() 