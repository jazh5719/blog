function fetch(params) {
    return new Promise((resolve) => {
        const num = Math.floor(1 + Math.random() * 5)
        setTimeout(() => {
            resolve({params, num})
        }, 1000 * num)
    })
}

// callback
class Axios {
    constructor(limitNum) {
        this.limitNum = limitNum // 同时请求的限制数量
        this.currentNum = 0 // 当前正在进行中的请求数量
        this.quque = []
    }
    fetch(params, cb) {
        if (this.currentNum < this.limitNum) {
            this.currentNum++
            fetch(params)
                .then(res => cb(res))
                .catch(err => cb(err))
                .finally(() => {
                    this.currentNum--
                    if (this.quque.length > 0) {
                        const next = this.quque.shift()
                        this.fetch(next.params, next.cb)
                    }
                })
        } else {
            this.quque.push({ params, cb })
        }
    }
}
// const axios = new Axios(2)
// axios.fetch(`http://localhost:3000/1`, res => { console.log(1, res) })
// axios.fetch(`http://localhost:3000/2`, res => { console.log(2, res) })
// axios.fetch(`http://localhost:3000/3`, res => { console.log(3, res) })
// axios.fetch(`http://localhost:3000/4`, res => { console.log(4, res) })
// axios.fetch(`http://localhost:3000/5`, res => { console.log(5, res) })
// axios.fetch(`http://localhost:3000/6`, res => { console.log(6, res) })
// axios.fetch(`http://localhost:3000/7`, res => { console.log(7, res) })
// axios.fetch(`http://localhost:3000/8`, res => { console.log(8, res) })



// promise, 主要是把resolve、reject给存起来
class AxiosP {
    constructor(limitNum) {
        this.limitNum = limitNum
        this.num = 0
        this.quque = []
    }

    fetch(params) {
        return new Promise((resolve, reject) => {
            this.quque.push({ params, resolve, reject })

            this.toFetch()
        })
    }

    toFetch() {
        if (this.num < this.limitNum && this.quque.length > 0) {
            const { params, resolve, reject } = this.quque.shift()
            this.num++
            console.log('todo', params)
            fetch(params)
                .then(res => resolve(res))
                .catch(err => reject(err))
                .finally(() => {
                    this.num--
                    this.toFetch()
                })
        }
    }
}


const axios = new AxiosP(3)
axios.fetch(1).then(res => { console.log(1, res) })
axios.fetch(2).then(res => { console.log(2, res) })
axios.fetch(3).then(res => { console.log(3, res) })
axios.fetch(4).then(res => { console.log(4, res) })
axios.fetch(5).then(res => { console.log(5, res) })
axios.fetch(6).then(res => { console.log(6, res) })
axios.fetch(7).then(res => { console.log(7, res) })
axios.fetch(8).then(res => { console.log(8, res) })