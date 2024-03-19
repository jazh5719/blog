//  节流
function throttle(cb, time = 1000) {
    let timer
    return function (...args) {
        if (timer) return
        cb.apply(this, args) // 立即执行

        timer = setTimeout(() => {
            cb.apply(this, args)
            timer = null
            clearTimeout(timer)
        }, time)
    }
}


const dothing = (...args) => {
    // console.log(Date.now() / 1000)
    console.log(args)
}
const fn = throttle(dothing)

setInterval(() => {
    fn(1, 2, 3, 4)
}, 500)