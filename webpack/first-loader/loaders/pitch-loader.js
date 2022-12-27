module.exports = function(content) {
  console.debug('called pitch loader');

  return content;
}

module.exports.pitch = function() {
  console.debug('called pitch loader\'s pitch method', ...arguments);
  // pitch 内 return 会熔断后续 loader 执行
  // return 'xxx';
}