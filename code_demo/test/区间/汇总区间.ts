/**
 * 汇总区间
 * 给定一个  无重复元素 的 有序 整数数组 nums 。
 * 返回 恰好覆盖数组中所有数字 的 最小有序 区间范围列表 。也就是说，nums 的每个元素都恰好被某个区间范围所覆盖，并且不存在属于某个范围但不属于 nums 的数字 x 。
 * 列表中的每个区间范围 [a,b] 应该按如下格式输出：
 * "a->b" ，如果 a != b
 * "a" ，如果 a == b
 *
 * 示例 ：
 * 输入：nums = [0,1,2,4,5,7]
 * 输出：["0->2","4->5","7"]
 * 解释：区间范围是：
 * [0,2] --> "0->2"
 * [4,5] --> "4->5"
 * [7,7] --> "7"
 *
 * https://leetcode.cn/problems/summary-ranges/description/?envType=study-plan-v2&envId=top-interview-150
 */

function summaryRanges(nums: number[]): string[] {
  const res: string[] = [];
  let index = 0;
  let start;
  let tempIndex;
  while (index < nums.length) {
    if (index + 1 <= nums.length - 1 && nums[index] + 1 === nums[index + 1]) {
      start = nums[index];
      tempIndex = index;
      while (tempIndex + 1 <= nums.length - 1 && nums[tempIndex] + 1 === nums[tempIndex + 1]) {
        tempIndex++;
      }
      res.push(`${start}->${nums[tempIndex]}`);
      index = tempIndex + 1;
    } else {
      res.push(String(nums[index]));
      index++;
    }
  }
  return res;
}
