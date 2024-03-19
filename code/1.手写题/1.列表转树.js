const list = [
    { parent: 4, id: 6 },
    { parent: 0, id: 2 },
    { parent: -1, id: 0 },
    { parent: -1, id: 100 },
    { parent: 0, id: 1 },
    { parent: 0, id: 3 },
    { parent: 1, id: 7 },
    { parent: 2, id: 5 },
    { parent: 100, id: 101 },
]


const format = (list) => {
    // 排序
    const newList = list.sort((a, b) => a.parent - b.parent)
    console.log(newList)
    const ret = []
    while (newList.length > 0) {
        const current = newList.pop()
        console.log(newList)
        for (let i = 0; i < newList.length; i++) {
            if (newList[i].id === current.parent) {
                const children = newList[i].children || []
                children.push(current)
                newList[i].children = children
                break
            } else {
                ret.push(current)
            }
        }

    }
    // console.log(ret)
}
format(list)