/*
 * @lc app=leetcode.cn id=1108 lang=javascript
 *
 * [1108] IP 地址无效化
 */

// @lc code=start
/**
 * @param {string} address
 * @return {string}
 */
// 1.replace
// var defangIPaddr = function (address) {
//   return address.replace(/\./g, "[.]");
// };

// 2.replaceAll
// var defangIPaddr = function (address) {
//   return address.replaceAll('.', "[.]");
// };

// 3.for
var defangIPaddr = function (address) {
  let str = "";
  for (let i = 0; i < address.length; i++) {
    if (address[i] === ".") {
      str = str + "[.]";
    } else {
      str = str + address[i];
    }
  }
  return str;
};

// @lc code=end
