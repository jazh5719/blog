/*
 * @lc app=leetcode.cn id=1720 lang=typescript
 *
 * [1720] 解码异或后的数组
 */
/**
 *  a = b ^ c
 *  b = a ^ c
 *  c = a ^ b
 * 
 *  */

// @lc code=start
function decode(encoded: number[], first: number): number[] {
    const arr: number[] = []
    arr[0] = first
    for (let i = 1; i <= encoded.length; i++) {
        arr[i] = arr[i - 1] ^ encoded[i - 1]
    }

    return arr
};
// @lc code=end

