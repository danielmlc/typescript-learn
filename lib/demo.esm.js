/**
 * 判断当前数据是否为对象
 * @param target 函数或object
 */
function isObject(target) {
    var type = typeof target;
    return target !== null && (type === "object" || type === "function");
}

var version = "1.0.0";

export { isObject, version };
