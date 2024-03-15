// 防抖
function debounce(cb, time = 1000) {
    let timer
    return function (...args) {
        if (timer) {
            clearInterval(timer)
        }
        timer = setTimeout(() => {
            cb.apply(this, args)
        }, time);
    }
}

const fn = (...args) => {
    console.log(Date.now() / 1000)
    console.log(args)
}

const emple = debounce(fn)



let index = 0
console.log(Date.now() / 1000)
let timer = setInterval(() => {
    if (index >= 5) {
        clearInterval(timer)
    }
    emple(1, 2, 3, 4, 5)
    index++
}, 500);