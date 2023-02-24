// NO.322
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  const table = new Map();
  return dp(coins, amount, table)
};

function dp(coins, amount, table) {
  if (amount === 0) return 0;
  if (amount < 0) return -1;

  if (table.has(amount)) return table.get(amount);

  let res = Infinity;
  for(c of coins) {
    const a = amount - c;
    const subNum = table.has(a) ? table.get(a) : dp(coins, a, table);

    if (subNum === -1) continue;
    res = Math.min(res, subNum);
  }

  const num = res === Infinity ? -1 : res + 1;
  table.set(amount, num);
  return num;
}