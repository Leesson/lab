module.exports = function(content) {
  console.debug('called log loader: ', ...arguments);

  return content;
}