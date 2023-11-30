/**
 * 买卖股票的最佳时机
 * 给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。
 * 只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。
 * 设计一个算法来计算你所能获取的最大利润。
 * 返回可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。
 *
 * 输入：[7,1,5,3,6,4]
 * 输出：5
 * 解释：在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
 *
 * https://leetcode.cn/problems/best-time-to-buy-and-sell-stock/description/?envType=study-plan-v2&envId=top-interview-150
 */

function maxProfit(prices: number[]): number {
  let res = 0;
  let minprice = prices[0];
  for (let p of prices) {
    res = Math.max(res, p - minprice);
    minprice = Math.min(p, minprice);
  }
  return res;
}

/**
 * 买卖股票的最佳时机 II
 * 一个整数数组 prices ，其中 prices[i] 表示某支股票第 i 天的价格。
 * 每天可以决定是否购买和/或出售股票。任何时候 最多 只能持有 一股 股票。也可以先购买，然后在 同一天 出售。
 * 返回 能获得的 最大 利润 。
 *
 * 示例 1：
 * 输入：prices = [7,1,5,3,6,4]
 * 输出：7
 * 解释：在第 2 天（股票价格 = 1）的时候买入，在第 3 天（股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5 - 1 = 4 。
 * 随后，在第 4 天（股票价格 = 3）的时候买入，在第 5 天（股票价格 = 6）的时候卖出, 这笔交易所能获得利润 = 6 - 3 = 3 。
 * 总利润为 4 + 3 = 7 。
 *
 * https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-ii/description/?envType=study-plan-v2&envId=top-interview-150
 */

function maxProfit2(prices: number[]): number {
  let res = 0;
  for (let i = 1; i < prices.length; i++) {
    res += Math.max(prices[i] - prices[i - 1], 0);
  }
  return res;
}
