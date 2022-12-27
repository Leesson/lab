module.exports = function(content, map, meta) {
  console.debug('called raw loader: ', ...arguments);
  
  return 'content';
}

module.exports.raw = true;