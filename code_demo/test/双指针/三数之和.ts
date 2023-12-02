/**
 * 三数之和
 * 一个整数数组 nums ，
 * 判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != k ，
 * 同时还满足 nums[i] + nums[j] + nums[k] == 0 。
 * 返回所有和为 0 且不重复的三元组。
 *
 * 示例：
 * 输入：nums = [0,0,0]
 * 输出：[[0,0,0]]
 * 解释：唯一可能的三元组和为 0 。
 *
 * https://leetcode.cn/problems/3sum/
 */

function threeSum(nums: number[]): number[][] {
  const res: number[][] = [];
  const set = new Set();
  nums.sort((a, b) => a - b);
  if (nums[0] > 0) {
    return res;
  }
  let i, l, r, cur, key;
  for (i = 1; i < nums.length - 1; i++) {
    l = i - 1;
    r = i + 1;
    while (true) {
      cur = nums[l] + nums[i] + nums[r];
      if (cur === 0) {
        key = `${nums[l]}${nums[i]}${nums[r]}`;
        if (!set.has(key)) {
          res.push([nums[l], nums[i], nums[r]]);
          set.add(key);
        }
        l--;
        r++;
      } else if (cur > 0) {
        l--;
      } else {
        r++;
      }
      if (l < 0 || r === nums.length) {
        break;
      }
    }
  }
  return res;
}
