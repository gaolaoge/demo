/**
 * versions是一个项目的版本号列表，因多人维护，
 *
 * 不规则 var versions=['1.45.0','1.5','6','3.3.3.3.3.3.3'] ，
 *
 * 要求从小到大排序，注意'1.45'比'1.5'大：
 *
 * var sorted=['1.5','1.45.0','3.3.3.3.3.3','6']。
 */

module.exports = function sortVersion(arr) {
  return arr.sort((a, b) => {
    const aList = a.split(".").map(Number);
    const bList = b.split(".").map(Number);
    for (let i = 0; i < Math.max(aList.length, bList.length); i++) {
      if (aList[i] !== bList[i]) {
        if (aList[i] > bList[i]) {
          return 1;
        } else if (aList[i] < bList[i]) {
          return -1;
        }
      }
    }
    return 0;
  });
};
