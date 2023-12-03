/**
 * 最长连续序列
 * 给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。
 * 设计并实现时间复杂度为 O(n) 的算法解决此问题。
 *
 * 示例：
 * 输入：nums = [100,4,200,1,3,2]
 * 输出：4
 * 解释：最长数字连续序列是 [1, 2, 3, 4]。它的长度为 4。
 *
 * https://leetcode.cn/problems/longest-consecutive-sequence/description/?envType=study-plan-v2&envId=top-interview-150
 */

function longestConsecutive(nums: number[]): number {
  const set = new Set(nums);
  let maxLen = 0;
  let tempLen = -1;
  let index = 0;
  while (index < nums.length) {
    if (!set.has(nums[index] - 1)) {
      tempLen = 1;
      while (set.has(nums[index] + tempLen)) {
        tempLen++;
      }
      maxLen = Math.max(maxLen, tempLen);
    }
    index++;
  }
  return maxLen;
}
