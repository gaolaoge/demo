/**
 * 长度最小的子数组
 * 给定一个含有 n 个正整数的数组和一个正整数 target 。
 * 找出该数组中满足其总和大于等于 target 的长度最小的 连续子数组 [numsl, numsl+1, ..., numsr-1, numsr] ，并返回其长度。如果不存在符合条件的子数组，返回 0 。
 *
 * 示例：
 * 输入：target = 7, nums = [2,3,1,2,4,3]
 * 输出：2
 * 解释：子数组 [4,3] 是该条件下的长度最小的子数组。
 *
 * https://leetcode.cn/problems/minimum-size-subarray-sum/description/?envType=study-plan-v2&envId=top-interview-150
 */

function minSubArrayLen(target: number, nums: number[]): number {
  let minLen = nums.length + 1;
  let left = 0;
  let right = 0;
  let sum = 0;
  while (right < nums.length) {
    sum += nums[right];
    if (sum >= target) {
      if (minLen === nums.length + 1) {
        minLen = right - left + 1;
      }
      while (sum - nums[left] >= target) {
        sum -= nums[left];
        left++;
        minLen = Math.min(minLen, right - left + 1);
      }
    }
    right++;
  }
  return minLen === nums.length + 1 ? 0 : minLen;
}
