// module.exports = function (content) {
//   return content
// }

module.exports = function(content, map, meta) {
  console.debug('called sync loader');
  
  /**
   * err {Error} 错误对象
   * content {String} 处理后的内容
   * map {String} source-map
   * meta {?} 给下一个loader传递的参数
   */
  this.callback(null, content, map, meta);
}