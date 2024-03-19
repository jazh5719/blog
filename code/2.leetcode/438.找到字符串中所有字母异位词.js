/*
 * @lc app=leetcode.cn id=438 lang=javascript
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
    // return fn1(s, p)
    return fn2(s, p)
};

// 双指针map，超时
function fn1(s, p) {
    let l = 0
    let r = 0
    const ret = []
    const map = new Map()
    for (let str of p) {
        map.set(str)
    }
    while (l <= r && r < s.length) {
        if (map.has(s[r])) {
            if (r - l === p.length - 1) {
                if (check(l, r)) {
                    ret.push(l)
                }
                l++
            }
        } else {
            l = r + 1
        }
        r++
    }

    function check(left, right) {
        const str = s.slice(left, right + 1)

        const map = new Map()

        for (let key of str) {
            const num = map.get(key) || 0
            map.set(key, num + 1)
        }
        for (let key of p) {
            const num = map.get(key)
            if (!num || num === 0) {
                return false
            }
            if (num > 0) {
                map.set(key, num - 1)
            }
        }
        return true
    }

    return ret
}

// 滑动
function fn2(s, p) {
    const needMap = {}

    for (let i = 0; i < p.length; i++) {
        const c = p[i]
        if (c in needMap) {
            needMap[c]++
        } else {
            needMap[c] = 1
        }
    }

    const ret = []
    let l = 0
    let r = 0
    let count = 0

    while (l <= r && r < s.length) {
        if (needMap[s[r]] > 0) {
            count++
        }
        needMap[s[r]]--
        r++


        if (count === p.length) {
            ret.push(l)
        }
        if (r - l === p.length) {
            if (needMap[s[l]] >= 0) {
                count--
            }
            needMap[s[l]]++
            l++
        }
    }

    return ret
}
// ""baa"\n"aa""


// @lc code=end

// ""ababababab"\n"aab""


