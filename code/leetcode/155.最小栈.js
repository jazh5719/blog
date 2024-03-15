/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 */

// @lc code=start

var MinStack = function () {
    this.min = undefined
    this.minStack = []
    this.stack = []
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
    this.stack.unshift(val)
    this.min = Math.min(this.min === undefined ? Infinity : this.min, val)
    this.minStack.unshift(this.min)
};

// [2147483647]
/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    this.stack.shift()
    this.minStack.shift()
    this.min = this.minStack[0]

};
/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.stack[0]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this.minStack[0]
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end

