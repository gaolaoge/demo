/**
 *  合并区间
 * 以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。
 * 合并所有重叠的区间，并返回 一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间 。
 * 示例：
 * 输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
 * 输出：[[1,6],[8,10],[15,18]]
 * 解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6]。
 *
 * https://leetcode.cn/problems/merge-intervals/description/?envType=study-plan-v2&envId=top-interview-150
 */

function merge(intervals: number[][]): number[][] {
  intervals.sort((a, b) => a[0] - b[0]);
  let index = 0;
  let l;
  let r;
  while (index < intervals.length - 1) {
    l = intervals[index];
    r = intervals[index + 1];
    if (l[0] === r[0]) {
      if (l[1] <= r[1]) {
        intervals.splice(index, 1);
      } else {
        intervals.splice(index + 1, 1);
      }
    } else {
      if (l[1] > r[0]) {
        if (l[1] <= r[1]) {
          l[1] = r[1];
          intervals.splice(index + 1, 1);
        } else {
          intervals.splice(index + 1, 1);
        }
      } else if (l[1] === r[0]) {
        l[1] = r[1];
        intervals.splice(index + 1, 1);
      } else {
        index++;
      }
    }
  }
  return intervals;
}

// [1,4] [2, 6]
// [1,4] [2, 3]
// [1,4] [4, 6]
// [1,4] [5, 6]
// [1,4] [8, 19]
