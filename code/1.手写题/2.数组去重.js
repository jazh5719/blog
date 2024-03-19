const list = [8, 1, 2, 3, 4, 5, 6, 6, 7, 7, 7, 8]

function fun1(array) {
    return [...new Set(array)]
}
console.log('fun1', fun1(list))



function fun2(array) {
    const map = new Map()
    const newList = []
    for (let item of array) {
        if (map.has(item)) continue
        map.set(item)
        newList.push(item)
    }
    return newList
}
console.log('fun2', fun2(list))