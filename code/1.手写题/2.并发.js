axios = require('axios')

let quque = []
const max = 3
let doingNum = 0
const watchMap = {}
const watch = (params, cb) => {
    watchMap[params] = cb
}
let index = 0
async function myAxios(params) {
    index++
    quque.push(({ params, index }))
    if (quque.length === 0 || doingNum >= max) {
        return new Promise(resolve => {
            watch(index, (data) => {
                resolve(data)
                delete watchMap[index]
            })
        })
    }
    return new Promise(resolve => {
        function doFn() {
            const item = quque.shift()
            if (!item) return
            const { params, index } = item
            doingNum++
            axios(params).then(res => res.data).then(res => {
                if (watchMap[index]) {
                    watchMap[index](res)
                }
                resolve(res)
                doingNum--
                doFn()
            })
        }
        doFn()
    })
}

myAxios(`http://localhost:3000/1`).then(res => { console.log(1, res) })
myAxios(`http://localhost:3000/2`).then(res => { console.log(2, res) })
myAxios(`http://localhost:3000/3`).then(res => { console.log(3, res) })
myAxios(`http://localhost:3000/4`).then(res => { console.log(4, res) })
myAxios(`http://localhost:3000/5`).then(res => { console.log(5, res) })
myAxios(`http://localhost:3000/6`).then(res => { console.log(6, res) })
myAxios(`http://localhost:3000/7`).then(res => { console.log(7, res) })
myAxios(`http://localhost:3000/8`).then(res => { console.log(8, res) })