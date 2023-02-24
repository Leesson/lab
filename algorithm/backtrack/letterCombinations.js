/**
 * 给一个2-9的字符串，返回手机键盘对应的所有字母组合
 * @param {String} digits 数组，2-9
 * @returns {String[]} list
 */
var letterCombinations = function (digits) {
  const mapping = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
  const res = [];
  
  if (digits.length === 0) return res;

  function backtrack(index, sb) {
    if (index === digits.length) {
      res.push(sb.join(''));
      return;
    }

    const x = mapping[digits[index]];
    for (let i = 0; i < x.length; i++) {
      const c = x.charAt(i);
      sb.push(c);
      backtrack(index + 1, sb)
      sb.pop();
    }
  }

  backtrack(0, []);

  return res;
}
// var letterCombinations = function (digits) {
//   const mapping = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
//   const res = [];
  
//   if (digits.length === 0) return res;

//   function backtrack(digits, start, sb) {
//     console.debug('backtrack', start, sb.join(''));
//     if (sb.length === digits.length) {
//       res.push(sb.join(''));
//       return;
//     }

//     for (let i = start; i < digits.length; i++) {
//       const digit = digits.charAt(i);
//       for (let j = 0; j < mapping[digit].length; i++) {
//         let c = mapping[digit].charAt(j);
//         console.debug('for2', i, j, digit, c);
//         sb.push(c);
//         backtrack(digits, i + 1, sb);
//         sb.pop();
//       }
//     }
//   }
  
//   const sb = [];
//   backtrack(digits, 0, sb);

//   return res;
// }

let res;
res = letterCombinations('23');
console.debug('23: ', res);
