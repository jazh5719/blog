class MyPromise {
    constructor(fn) {
        this.status = 'pending' // promise的状态
        this.value = null // resolve、reject的返回值
        this.resolveCallBacks = [] // 成功回调
        this.rejectCallBacks = [] // 失败回调
        
        // 立即执行promise
        try {
            fn(this.resolve.bind(this), this.reject.bind(this))
        } catch (error) {
            this.reject(error)
        }
    }

  

    resolve(value) {
        if (this.status !== 'pending') return
        this.status = 'resolved'
        this.value = value
        this.resolveCallBacks.forEach(callBack => {
            callBack(this.value)
        })
    }
    
    reject(value) {
        if (this.status !== 'pending') return
        this.status = 'rejected'
        this.value = value
        this.rejectCallBacks.forEach(callBack => {
            callBack(this.value)
        })
    }

    // 1.then的执行只是用于存储回调，并不会立即执行，他的执行时机在resolve或者reject之后
    // 2.then会返回一个promise
    then(onResolve, onReject) {
        return new MyPromise((resolve, reject) => {
            onResolve = typeof onResolve === "function" ? onResolve 
            : function (value) { return value }
            onReject = typeof onResolve === "function" ? onReject 
            : function (value) { throw value }
    
            if (this.status === 'pending') {
                this.resolveCallBacks.push(onResolve)
                this.rejectCallBacks.push(onReject)
            }
            
            if (this.status === 'resolve') {
                onResolve(this.value)
            }
            if (this.status === 'reject') {
                onReject(this.value)
            }
        })
    }

    catch(onReject) {
        onReject = typeof onResolve === "function" ? onReject 
        : function (value) { throw value }
        if (this.status === 'pending') {
            this.rejectCallBacks.push(onReject)
        }
        if (this.status === 'reject') {
            onReject(this.value)
        }
    }
}