/**
 * 插入区间
 *
 */

function insert(intervals: number[][], newInterval: number[]): number[][] {
  if (intervals.length === 0) {
    return [newInterval];
  }
  let midIndex = -1;
  const arr = intervals.map(item => item[0]);
  const getSite = (start: number, end: number): number => {
    midIndex = Math.floor((start + end + 1) / 2);
    if (newInterval[0] === intervals[midIndex][0] || start === end) {
      return midIndex;
    } else if (newInterval[0] > intervals[midIndex][0]) {
      return getSite(midIndex + 1, end);
    } else {
      return getSite(start, midIndex - 1);
    }
  };
  const targetIndex = getSite(0, arr.length - 1);
  if (intervals[targetIndex][0] <= newInterval[0] && intervals[targetIndex][1] >= newInterval[1]) {
    return intervals;
  } else if (intervals[targetIndex][0] > newInterval[0] && intervals[targetIndex][1] >= newInterval[1]) {
    return intervals.splice(targetIndex, 1, [newInterval[0], intervals[targetIndex][1]]);
  } else if (intervals[targetIndex][0] <= newInterval[0] && intervals[targetIndex][1] < newInterval[1]) {
    return intervals.splice(targetIndex, 1, [intervals[targetIndex][0], newInterval[1]]);
  } else if (intervals[targetIndex][0] > newInterval[1]) {
    return [newInterval, ...intervals];
  } else if (intervals[targetIndex][1] < newInterval[0]) {
    intervals.splice(targetIndex + 1, 0, newInterval);
    return intervals;
  } else {
    return [[]];
  }
}

const intervals = [
    [1, 3],
    [6, 9]
  ],
  newInterval = [2, 5];

console.log(insert(intervals, newInterval));

// 1,4 2,3
//
