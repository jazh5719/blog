// 寻找子类继承的值

const a = { name: 'a' }

const b = Object.create(a)
b.name1 = 'b'

const c = Object.create(b)
c.name2 = 'c'

function fn(obj, key) {
    if (obj.hasOwnProperty(key)) {
        return obj
    } else if (obj.__proto__) {
        return fn(obj.__proto__, key)
    } else {
        return null
    }
}

console.log(fn(c, 'name1'))
