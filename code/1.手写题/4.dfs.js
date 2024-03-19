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


function dfs(tree) {
    const ret = []
    function fn(node) {
        if (!node) return
        ret.push(node.val)
        const children = node.children || []

        for (let item of children) {
            fn(item)
        }
    }

    fn(tree)

    return ret
}

const ret = dfs(tree)
console.log(ret)