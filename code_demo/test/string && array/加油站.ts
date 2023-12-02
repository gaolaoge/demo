/**
 * 加油站
 * 一条环路上有 n 个加油站，其中第 i 个加油站有汽油 gas[i] 升。
 * 一辆油箱容量无限的的汽车，从第 i 个加油站开往第 i+1 个加油站需要消耗汽油 cost[i] 升。从其中的一个加油站出发，开始时油箱为空。
 * 给定两个整数数组 gas 和 cost ，如果可以按顺序绕环路行驶一周，则返回出发时加油站的编号，否则返回 -1 。如果存在解，则 保证 它是 唯一 的。
 *
 * 示例 1:
 * 输入: gas = [1,2,3,4,5], cost = [3,4,5,1,2]
 * 输出: 3
 *
 * https://leetcode.cn/problems/gas-station/
 */

function canCompleteCircuit(gas: number[], cost: number[]): number {
  const gases = gas.reduce((a, b) => a + b, 0);
  const costs = cost.reduce((a, b) => a + b, 0);
  if (gases < costs) {
    return -1;
  }

  let sum = 0;
  let firstIndex = -1;
  while (true) {
    for (let i = 0; i < gas.length; i++) {
      sum += gas[i] - cost[i];
      if (sum < 0) {
        sum = 0;
        firstIndex = -1;
        continue;
      } else {
        if (firstIndex === -1) {
          firstIndex = i;
        } else if (firstIndex === i) {
          return firstIndex;
        }
      }
    }
  }
}
