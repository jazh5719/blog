
function copy(data) {
    if (data === null || typeof data !== 'object') return data

    let newData = Array.isArray(data) ? [] : {}

    for (let key in data) {
        if (Object.prototype.toString.call(data[key]) === '[object Date]') {
            newData[key] = new Date(data[key])
        } else if (Object.prototype.toString.call(data[key]) === '[object Symbol]') {
            newData[key] = Symbol.prototype.valueOf.call(data[key])
        } else if (Object.prototype.toString.call(data[key]) === '[object RegExp]') {
            newData[key] = new RegExp(data[key])
        } else {
            newData[key] = copy(data[key])
        }
    }
    return newData
}

const obj = {
    regexp: /[0-9]/,
    date: new Date(),
    symbol1: Symbol('aaa'),
    fun: () => {
        console.log(12)
    },
    name: 'o1',
    children: [{
        name: 'c1'
    }]
}

const obj1 = copy(obj)

obj1.name = 'o2'
obj1.children[0].name = 'c22'
obj1.fun = () => { console.log(13) }

obj.fun()
console.log(obj)
console.log(obj1)
console.log(obj.symbol1 === obj1.symbol1)


