const list = [
    { parent: -1, id: 0 },
    { parent: 0, id: 2 },
    { parent: 2, id: 5 },

    { parent: 0, id: 1 },
    { parent: 1, id: 7 },

    { parent: 0, id: 3 },
    { parent: 3, id: 4 },
    { parent: 3, id: 6 },

    { parent: -1, id: 100 },
    { parent: 100, id: 101 },
    { parent: 102, id: 103 }
]


// 双循环
const format1 = (list) => {
    const ret = []
    for (let node of list) {
        let isFind = false
        for (let item of list) {
            if (item.id === node.parent) {
                const children = item.children || []
                children.push(node)
                item.children = children
                isFind = true
                break
            }
        }

        if (!isFind) {
            ret.push(node)
        }
    }
    return ret
}


// 使用hash表， 时间复杂度: O(n)
function format2(list) {
    const parentMap = new Map()
    const idMap = new Map()

    const ret = []
    for (let item of list) {
        const parentId = item.parent
        idMap.set(item.id)
        const list = parentMap.get(parentId) || []
        list.push(item)
        parentMap.set(item.parent, list)
    }
    for (let node of list) {
        if (parentMap.has(node.id)) {
            node.children = parentMap.get(node.id)
        }

        if (!idMap.has(node.parent)) {
            ret.push(node)
        }
    }

    return ret
}

// 递归
function format3(list) {


    function search(parentId, ret) {
        for (let item of list) {
            if (item.parent === parentId) {
                item.children = []
                search(item.id, item.children)
                ret.push(item)
            }
        }

        return ret
    }
    return search(-1, [])
}

function format(list) {
    // const arr = format1(list)
    const arr = format2(list)
    // const arr = format3(list)
    console.log(JSON.stringify(arr))

}

format(list)