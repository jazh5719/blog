const axios = require('axios')

function withTryApi(api, params) {
    if(Object.prototype.toString.call(api) !== '[object Promise]') {
        throw 'not promise'
    }
    const { delay = 3000, tryNum } = params || {}
    let num = 0
    return new Promise((resolve, reject) => {

        function tryFetch() {
            num++
            if (tryNum < num) {
                reject('timeout')
                return
            }
            const timer = setTimeout(() => {
                tryFetch()
            }, delay)
            api.then((res) => {
                clearTimeout(timer)
                resolve(res)
            }).catch(err => {
                clearTimeout(timer)
                reject(err)
            })
        }
        tryFetch()
    })
}
const api = axios('https://api.juejin.cn/user_api/v1/user/get?aid=2608&uuid=7111890257502897701&spider=0&not_self=0&verifyFp=verify_lwq1sv1p_LkFsCgmK_S0gw_4huW_9p6t_R2wrN3yA1owC&fp=verify_lwq1sv1p_LkFsCgmK_S0gw_4huW_9p6t_R2wrN3yA1owC&msToken=1o1s2EH92s-1Z7aO3HxlE7ffEfbbs7zjkBKwjld3gJPwj3OEeNykwq0WeyOaH4VyDBS9FUW2r1TaS7IpfR-yqSRiVZBbQqP4MEUjj7R-vGC2LZYk9f1_hef-N9Sz-6w%3D&a_bogus=DJMQDO2SMsm1mDfNV7Dz9nXmqcW0YW4egZEzaqQnp0w7')
withTryApi(api, {
    delay: 3000,
    tryNum: 3
}).then(res => {
    console.log('res', res.data)
}).catch(err => {
    console.log('err', err)
})