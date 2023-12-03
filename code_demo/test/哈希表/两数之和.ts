/**
 * 两数之和
 * 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
 * 可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
 * 可以按任意顺序返回答案。
 *
 * 示例 1：
 * 输入：nums = [2,7,11,15], target = 9
 * 输出：[0,1]
 * 解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
 *
 * https://leetcode.cn/problems/two-sum/description/?envType=study-plan-v2&envId=top-interview-150
 */

function twoSum(nums: number[], target: number): number[] {
  const map = new Map();
  let index = 0;
  let temp;
  for (; index < nums.length; index++) {
    map.set(nums[index], index);
  }
  index = 0;
  while (index < nums.length) {
    temp = target - nums[index];
    if (map.has(temp) && map.get(temp) !== index) {
      return [index, map.get(temp)];
    }
    index++;
  }
  return [-1, -1];
}
