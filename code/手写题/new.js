// new的实现
function New1(Person, ...args) {
    const obj = {}
    obj.__proto__ = Person.prototype
    const res = Person.apply(obj, args)
    return typeof res === 'object' ? res : obj
}

function C(name) {
    this.name = name
    // return { name11: '111' }
}


const c1 = new C('c1')
const c2 = New1(C, 'c2')

console.log(c1)
console.log(c2)