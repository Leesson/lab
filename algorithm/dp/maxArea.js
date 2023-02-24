// NO.11
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  // 面积=(x2 - x1) * min(h2 - h1)
  // dp[i] = dp[i - 1] + (h[i] - h[i-1])
  let left = 0;
  let right = height.length - 1;
  let res = 0;

  while(left < right) {
    res = Math.max(res, (right - left) * Math.min(height[left], height[right]));
    if (height[left] > height[right]) {
      right--;
    } else {
      left++;
    }
  }

  return res;
};
