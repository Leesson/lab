module.exports = function(content) {
  return content.replace(/console\.(log|info|debug)\(.*\);?/g, '')
}