/**
 * 两数之和 II - 输入有序数组
 * 一个下标从 1 开始的整数数组 numbers ，该数组已按 非递减顺序排列，
 * 从数组中找出满足相加之和等于目标数 target 的两个数。
 * 如果设这两个数分别是 numbers[index1] 和 numbers[index2] ，则 1 <= index1 < index2 <= numbers.length 。
 *
 * 以长度为 2 的整数数组 [index1, index2] 的形式返回这两个整数的下标 index1 和 index2。
 * 假设每个输入 只对应唯一的答案 ，而且你 不可以 重复使用相同的元素。
 *
 * https://leetcode.cn/problems/two-sum-ii-input-array-is-sorted/description/?envType=study-plan-v2&envId=top-interview-150
 */

function twoSum(numbers: number[], target: number): number[] {
  let index = 0;
  let cur = 0;
  let curIndex = -1;
  while (index < numbers.length) {
    cur = target - numbers[index];
    curIndex = numbers.findIndex(
      (item, _index) => item === cur && _index !== index
    );
    if (curIndex !== -1) {
      return [index + 1, curIndex + 1];
    }
    index++;
  }
  return [-1, -1];
}
