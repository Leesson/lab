/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  if (nums.length < 3) return [];
  const sorted = nums.sort((a, b) => a - b);
  const res = [];
  for (let i = 0; i < sorted.length - 2; i++) {
    if (sorted[i] > 0) break;
    if (i > 0 && sorted[i] === sorted[i - 1]) continue;

    let right = sorted.length;
    for (let j = i + 1; j < sorted.length - 1; j++) {
      let sum = sorted[i] + sorted[j];
      console.log('for2', i, j, sum, right);
      if (sorted[j + 1] > -sum) {
        break;
      }

      if (j > i + 1 && sorted[j] === sorted[j - 1]) continue;

      let left = j + 1;
      let target = -sum;
      while (left < right) {
        let mid = Math.floor((right - left) / 2) + left;
        console.log('while', i, j, mid, left, right, sum + sorted[mid]);
        if (sorted[mid] === target) {
          res.push([sorted[i], sorted[j], sorted[mid]]);
          right = mid;
          break;
        } else if (sorted[mid] > target) {
          right = mid;
        } else {
          left = mid + 1;
        }
      }
    }
  }

  return res;
};

// -1 0 1 2 -1 -4
// -4 -1 -1 0 1 2
// while 1 2 4 -1 3 4
// while 1 2 3 -2 3 3
// [-1,-1,0,1]

var threeSum = function (nums) {
  let n = nums.length;
  nums = nums.sort((a, b) => a - b);
  const ans = [];
  // 枚举 a
  for (let first = 0; first < n; ++first) {
    // 需要和上一次枚举的数不相同
    if (first > 0 && nums[first] === nums[first - 1]) {
      continue;
    }
    // c 对应的指针初始指向数组的最右端
    let third = n - 1;
    let target = -nums[first];
    // 枚举 b
    for (let second = first + 1; second < n; ++second) {
      // 需要和上一次枚举的数不相同
      if (second > first + 1 && nums[second] == nums[second - 1]) {
        continue;
      }
      // 需要保证 b 的指针在 c 的指针的左侧
      while (second < third && nums[second] + nums[third] > target) {
        --third;
      }
      // 如果指针重合，随着 b 后续的增加
      // 就不会有满足 a+b+c=0 并且 b<c 的 c 了，可以退出循环
      if (second == third) {
        break;
      }

      if (nums[second] + nums[third] == target) {
        ans.push([nums[first], nums[second], nums[third]]);
      }
    }
  }
  return ans;
};


var threeSum = function (nums) {
  if (nums.length < 3) return [];
  nums = nums.sort((a, b) => a - b);
  const res = [];
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) break;
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let k = nums.length - 1;
    let target = -nums[i];
    for (let j = i + 1; j < nums.length - 1; j++) {
      let sum = nums[i] + nums[j];
      if (sum + nums[j + 1] > 0 || sum + nums[k] < 0) {
        break;
      }
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;

      while (j < k && nums[j] + nums[k] > target) {
        --k;
      }
      // 如果指针重合，随着 b 后续的增加
      // 就不会有满足 a+b+c=0 并且 b<c 的 c 了，可以退出循环
      if (j == k) {
        break;
      }

      if (nums[j] + nums[k] == target) {
        res.push([nums[i], nums[j], nums[k]]);
      }
    }
  }

  return res;
};