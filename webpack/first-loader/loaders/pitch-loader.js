module.exports = function(content) {
  console.debug('called pitch loader');

  return content;
}

module.exports.pitch = function() {
  console.debug('called pitch loader\'s pitch method', ...arguments);
  // this.loaders 可以访问到所有配置的loader
  // this.loaderIndex 可以获取当前loader在loaders中的索引
  // 详细用法参考 https://github.com/webpack-contrib/thread-loader/blob/master/src/index.js

  // pitch 内 return 会熔断后续 loader 执行
  // return 'xxx';

  // 异步也可以
  // const callback = this.async();
  // setTimeout(() => {
  //   callback(null, 'xxx');
  // })
}