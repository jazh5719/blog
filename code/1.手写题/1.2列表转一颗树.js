const list = [
    { parent: -1, id: 0 },
    { parent: 0, id: 2 },
    { parent: 2, id: 5 },

    { parent: 0, id: 1 },
    { parent: 1, id: 7 },

    { parent: 0, id: 3 },
    { parent: 3, id: 4 },
    { parent: 3, id: 6 },
]

// 递归
function format1(list) {
    console.time('time')

    let ret = null
    function searchParent(parentId, data, isRoot) {
        for (let node of list) {
            if (node.parent === parentId) {
                const children = []
                searchParent(node.id, children)
                if (children.length > 0) {
                    node.children = children
                }
                if (isRoot) {
                    ret = node
                } else {
                    data.push(node)
                }
            }
        }
    }

    searchParent(-1, null, true)
    console.timeEnd('time')

    return ret
}

// hash表
function format2(list) {
    console.time('time')
    let ret = {}
    const parentMap = new Map()
    for (let node of list) {
        const list = parentMap.get(node.parent) || []
        list.push(node)
        parentMap.set(node.parent, list)
    }

    for (let node of list) {
        if (parentMap.has(node.id)) {
            node.children = parentMap.get(node.id)
        }
        if(node.parent === -1) {
            ret = node
        }
    }
    console.timeEnd('time')

    return ret
}

function format(list) {
    // const arr = format1(list)
    const arr = format2(list)
    console.log(JSON.stringify(arr))

}

format(list)