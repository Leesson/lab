const { transformSync } = require('@babel/core');
const minify = require('babel-minify');

const code = `
  // 这里是注释
  const arr = [1, 2, 3];
  console.log(arr.map(i => i * 2))
`

const transformedCode = minify(transformSync(code).code)
console.debug('transformedCode: ', transformedCode.code)