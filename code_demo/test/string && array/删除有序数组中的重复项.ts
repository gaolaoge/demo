/**
 * 删除有序数组中的重复项
 * 一个 非严格递增排列 的数组 nums ，
 * 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。
 * 元素的 相对顺序 应该保持 一致 。
 *
 * https://leetcode.cn/problems/remove-duplicates-from-sorted-array/?envType=study-plan-v2&envId=top-interview-150
 */

/**
 * 正序
 */
function removeDuplicates1(nums: number[]): number {
  let index = 0;
  while (index < nums.length) {
    if (nums[index] === nums[index + 1]) {
      nums.splice(index, 1);
    } else {
      index++;
    }
  }
  return nums.length;
}

/**
 * 倒序，快好多
 */

function removeDuplicates2(nums: number[]): number {
  let index = nums.length - 1;
  while (index > 0) {
    if (nums[index] === nums[index - 1]) {
      nums.splice(index, 1);
    } else {
      index--;
    }
  }
  return nums.length;
}

/**
 * 删除有序数组中的重复项 II
 * 一个有序数组 nums ，原地 删除重复出现的元素，使得出现次数超过两次的元素只出现两次 ，
 * 返回删除后数组的新长度。
 *
 * https://leetcode.cn/problems/remove-duplicates-from-sorted-array-ii/
 */

function removeDuplicates3(nums: number[]): number {
  let index = nums.length - 1;
  while (index > 1) {
    if (nums[index] === nums[index - 1] && nums[index] === nums[index - 2]) {
      nums.splice(index, 1);
    } else {
      index--;
    }
  }
  return nums.length;
}
