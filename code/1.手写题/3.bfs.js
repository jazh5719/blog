const tree = {
    val: '1',
    children: [{
        val: '1-2',
        children: [{
            val: '1-2-1'
        }, {
            val: '1-2-2'
        }]
    }, {
        val: '1-3',
        children: [{
            val: '1-3-1'
        }, {
            val: '1-3-2'
        }, {
            val: '1-3-3',
            children: [{
                val: '1-3-3-1'
            }]
        }]
    }]
}



const toBfs = (tree) => {
    const ret = []
    const quque = []
    let node = tree

    while (node) {
        ret.push(node.val)

        const children = node.children || []
        children.forEach(item => {
            quque.push(item)
        })

        node = quque.shift()
    }
    return ret
}


const ret = toBfs(tree)
console.log(ret)