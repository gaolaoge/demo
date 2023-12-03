/**
 * 存在重复元素 II
 * 一个整数数组 nums 和一个整数 k ，判断数组中是否存在两个 不同的索引 i 和 j ，满足 nums[i] == nums[j] 且 abs(i - j) <= k 。
 * 如果存在，返回 true ；否则，返回 false 。
 *
 * 示例：
 * 输入：nums = [1,2,3,1], k = 3
 * 输出：true
 *
 * https://leetcode.cn/problems/contains-duplicate-ii/description/?envType=study-plan-v2&envId=top-interview-150
 *
 */

function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const map = new Map();
  let index = 0;
  while (index < nums.length) {
    if (map.has(nums[index])) {
      if (Math.abs(index - map.get(nums[index])) <= k) {
        return true;
      }
    }
    map.set(nums[index], index);
    index++;
  }
  return false;
}
