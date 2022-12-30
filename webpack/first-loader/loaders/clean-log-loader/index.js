const shcema = require('./schema.json');

module.exports = function(content) {
  console.debug('called clean log loader');
  const options = this.getOptions(shcema);

  const regMap = {
    debug: /console\.debug\(.*\);?/g,
    info: /console\.(debug|info)\(.*\);?/g,
    log: /console\.(debug|info|log)\(.*\);?/g,
    warn: /console\.(debug|info|log|warn)\(.*\);?/g,
    error: /console\.(debug|info|log|warn|error)\(.*\);?/g,
  }

  const reg = regMap[options.level] || regMap.log;

  return content.replace(reg, '')
}