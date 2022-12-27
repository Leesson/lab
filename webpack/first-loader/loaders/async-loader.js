module.exports = function(content, map, meta) {
  console.debug('called async loader');
  const callback = this.async();

  setTimeout(() => {
    console.debug('async loader callback');
    callback(null, content, map, meta);
  }, 1000);
}