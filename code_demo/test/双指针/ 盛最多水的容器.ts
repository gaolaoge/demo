/**
 *  盛最多水的容器
 * 给定一个长度为 n 的整数数组 height 。
 * 有 n 条垂线，第 i 条线的两个端点是 (i, 0) 和 (i, height[i]) 。
 * 找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
 * 返回容器可以储存的最大水量。
 *
 * https://leetcode.cn/problems/container-with-most-water/description/?envType=study-plan-v2&envId=top-interview-150
 */

function maxArea(height: number[]): number {
  let count = 0;
  let i = 0;
  let j = height.length - 1;
  while (i < j) {
    count = Math.max(count, (j - i) * Math.min(height[i], height[j]));
    if (height[i] <= height[j]) {
      i++;
    } else {
      j--;
    }
  }
  return count;
}
