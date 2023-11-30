/**
 * 移除元素
 * 一个数组 nums 和一个值 val，移除所有数值等于 val 的元素，并返回移除后数组的新长度。
 *
 * 输入：nums = [3,2,2,3], val = 3
 * 输出：2, nums = [2,2]
 * 解释：函数应该返回新的长度 2, 并且 nums 中的前两个元素均为 2。
 * 不需要考虑数组中超出新长度后面的元素。
 * 例如，函数返回的新长度为 2 。
 *
 * https://leetcode.cn/problems/remove-element/?envType=study-plan-v2&envId=top-interview-150
 */

function removeElement1(nums: number[], val: number): number {
  let index = nums.length;
  while (index >= 0) {
    if (nums[index] === val) {
      nums.splice(index, 1);
    }
    index--;
  }
  return nums.length;
}

var removeElement2 = function (nums, val) {
  let temp;
  while (true) {
    temp = nums.indexOf(val);
    if (temp === -1) break;
    else {
      nums.splice(temp, 1);
    }
  }
  return nums.length;
};
