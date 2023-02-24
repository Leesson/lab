// 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。

// 示例 1：

// 输入：n = 3
// 输出：["((()))","(()())","(())()","()(())","()()()"]
// 示例 2：

// 输入：n = 1
// 输出：["()"]

// 提示：

// 1 <= n <= 8
function generateParenthesis(n) {
  const res = [];
  const track = [];
  
  function backtrack(left, right) {
    if (left < 0 || right < 0 || left > right) {
      return;
    }
    
    if (left === 0 && right === 0) {
      res.push(track.join(''));
      return;
    }

    track.push('(');
    backtrack(left - 1, right);
    track.pop();

    track.push(')');
    backtrack(left, right - 1);
    track.pop();
  }

  backtrack(n, n)
  return res;
}
