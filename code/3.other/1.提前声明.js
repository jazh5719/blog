var foo = function () {
    console.log("foo1")
}
foo()

var foo = function () {
    console.log("foo2")
}
foo()


function foo() {
    console.log("foo3")
}
foo()

function foo() {
    console.log("foo4")
}
foo()


/**
 * 1.变量提前声明 优先于 函数提前声明 所以最后等同于
 * 
 * var foo
 * var foo
 * function foo() {
 *   console.log("foo3")
 * }
 * 
 * function foo() {
 *   console.log("foo4")
 * }
 * 
 * foo = function () {
 *   console.log("foo1")
 * }
 * foo()
 * 
 * foo = function() {
 *   console.log("foo2")
 * }
 * foo()
 */