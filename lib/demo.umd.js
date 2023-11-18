(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.demo = {}));
})(this, (function (exports) { 'use strict';

  /**
   * 判断当前数据是否为对象
   * @param target 函数或object
   */
  function isObject(target) {
      var type = typeof target;
      return target !== null && (type === "object" || type === "function");
  }

  var version = "1.0.0";

  exports.isObject = isObject;
  exports.version = version;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
