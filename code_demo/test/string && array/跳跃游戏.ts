/**
 * 跳跃游戏
 * 给定一个非负整数数组，最初位于数组的第一个位置。
 * 数组中的每个元素代表在该位置可以跳跃的最大长度。
 * 判断是否能够到达最后一个下标，如果可以，返回 true ；否则，返回 false 。
 *
 * 示例:
 * 输入：nums = [2,3,1,1,4]
 * 输出：true
 * 解释：可以先跳 1 步，从下标 0 到达下标 1, 然后再从下标 1 跳 3 步到达最后一个下标。
 *
 * https://leetcode.cn/problems/jump-game/
 */

function canJump(nums: number[]): boolean {
  let endIndex = nums.length - 1;
  for (let i = nums.length - 2; i >= 0; i--) {
    if (endIndex - i <= nums[i]) {
      endIndex = i;
    }
  }
  return endIndex === 0;
}

/**
 * 跳跃游戏 II
 * 给定一个长度为 n 的 0 索引整数数组 nums。初始位置为 nums[0]。
 * 每个元素 nums[i] 表示从索引 i 向前跳转的最大长度。
 * 换句话说，如果在 nums[i] 处，可以跳转到任意 nums[i + j] 处:
 *
 * 0 <= j <= nums[i]
 * i + j < n
 * 返回到达 nums[n - 1] 的最小跳跃次数。生成的测试用例可以到达 nums[n - 1]。
 *
 * https://leetcode.cn/problems/jump-game-ii/description/
 */

function jump(nums: number[]): number {
  let endIndex = nums.length - 1;
  let steps = 0;
  while (endIndex > 0) {
    let betterIndex = endIndex;
    for (let i = endIndex - 1; i >= 0; i--) {
      if (endIndex - i <= nums[i]) {
        betterIndex = i;
      }
    }
    endIndex = betterIndex;
    steps++;
  }
  return steps;
}
