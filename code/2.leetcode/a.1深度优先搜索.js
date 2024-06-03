const data = {
    value: '根节点',
    children: [{
        value: '子节点1',
        children: [{
            value: '子节点1-1',
            children: [{
                value: '子节点1-1-1',
            }]
        }, {
            value: '子节点1-2',
            children: [{
                value: '子节点1-2-1',
            }, {
                value: '子节点1-2-2',
            }]
        }]
    }, {
        value: '子节点2',
        children: [{
            value: '子节点2-1'
        }]
    }]
}



function fun(list) {
    const result = []

    function dfs(current) {
        result.push(current.value)
        if (current.children) {
            for (let i = 0; i < current.children.length; i++) {
                dfs(current.children[i])
            }
        }
    }
    dfs(list)

    console.log(result)
}

fun(data)