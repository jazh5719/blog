const list = [2, 1, 4, 3, 6, 5, 8, 7]

// 快排, 递归
function sort1(nums) {
    function fn(list) {
        if (list.length <= 1) return list
        const base = list[0]
        const leftList = []
        const rightList = []
        for (let i = 1; i < list.length; i++) {
            if (list[i] <= base) {
                leftList.push(list[i])
            } else {
                rightList.push(list[i])
            }
        }

        return [...fn(leftList), base, ...fn(rightList)]
    }

    return fn(nums)
}
console.log(sort2(list))