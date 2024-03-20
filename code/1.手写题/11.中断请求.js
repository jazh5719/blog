
// 
const action = (params) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(params)
        }, 3000) // 短接口1s，长接口3s
    })
}

/**
 * 
 * 长接口需要3s后返回结果，在返回之前又触发了一次端接口，那么只会返回最后一次接口
 */

class ControlApi {
    constructor(api) {
        this.index = -1
        this.api = api
    }

    async start(...args) {
        this.index++
        const currentIndex = this.index
        const res = await this.api(...args)
        if (currentIndex === this.index) {
            return res
        } else {
            return false
        }
    }
}

const api1 = new ControlApi(action)


// 耗时长的接口
api1.start({ name: 1 }).then(res => {
    console.log(res)
})

// 2.5s后再次执行一个 耗时0.1s的接口
setTimeout(() => {
    api1.start({ name: 2 }).then(res => {
        console.log(res)
    })
}, 2500)