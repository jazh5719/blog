// 提供了一个数组结构的 data，要求实现一个query类，返回一个新的数组，query类中内部有 过滤、排序、分组 等操作，并且支持链式调用，调用最终的 execute 方法返回结果


class Query {
    constructor(data) {
        this.data = data.slice()
    }

    filter(cb) {
        return new Query(this.data.filter(cb))
        // return this // 如果要保存每次返回的值则需要继续new一个实例，否则直接返回this即可
    }

    // sort会改变原数组
    sort(cb) {
        const data = this.data.slice()
        return new Query(data.sort(cb))
        // return this
    }

    execute() {
        return this.data
    }
}
const data = [
    { id: 1, name: "Alice", age: 20, sex: "girl" },
    { id: 2, name: "Bob", age: 25, sex: "boy" },
    { id: 3, name: "Charlie", age: 30, sex: "girl" },
    { id: 4, name: "David", age: 35, sex: "boy" },
    { id: 5, name: "Ella", age: 40, sex: "girl" },
];


const fn = new Query(data)

const list = fn.filter((a, b) => a.id !== 1)
const list1 = list.execute()
const list2 = list.sort((a, b) => b.id - a.id).execute()

console.log(list1)
console.log(list2)
