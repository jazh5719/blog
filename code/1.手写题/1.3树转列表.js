const tree = [
    {
        "parent": -1,
        "id": 0,
        "children": [
            {
                "parent": 0,
                "id": 2,
                "children": [
                    {
                        "parent": 2,
                        "id": 5
                    }
                ]
            },
            {
                "parent": 0,
                "id": 1,
                "children": [
                    {
                        "parent": 1,
                        "id": 7
                    }
                ]
            },
            {
                "parent": 0,
                "id": 3,
                "children": [
                    {
                        "parent": 3,
                        "id": 4
                    },
                    {
                        "parent": 3,
                        "id": 6
                    }
                ]
            }
        ]
    },
    {
        "parent": -1,
        "id": 100,
        "children": [
            {
                "parent": 100,
                "id": 101
            }
        ]
    },
    {
        "parent": 102,
        "id": 103
    }
]

function dfs(list) {
    const ret = []

    for (let node of list) {
        if (node.children) {
            ret.push(...dfs(node.children))
        }
        delete node.children
        ret.push(node)

    }

    return ret
}

console.log(dfs(tree))

