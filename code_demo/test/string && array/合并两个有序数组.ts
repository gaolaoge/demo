/**
 * 合并两个有序数组
 * 两个按 非递减顺序 排列的整数数组 nums1 和 nums2，
 * 两个整数 m 和 n ，分别表示 nums1 和 nums2 中的元素数目。
 *
 * 合并 nums2 到 nums1 中，使合并后的数组同样按 非递减顺序 排列。
 * 示例 1：
 * 输入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
 * 输出：[1,2,2,3,5,6]
 *
 * https://leetcode.cn/problems/merge-sorted-array/description/?envType=study-plan-v2&envId=top-interview-150
 */

/**
 * 倒序
 */
function merge1(nums1: number[], m: number, nums2: number[], n: number): void {
  let lastIndex = m + n - 1;
  let mIndex = m - 1;
  let nIndex = n - 1;
  while (lastIndex >= 0) {
    if (
      nums1[mIndex] >= nums2[nIndex] ||
      (!isNaN(nums1[mIndex]) && isNaN(nums2[nIndex]))
    ) {
      nums1[lastIndex] = nums1[mIndex];
      mIndex--;
    } else {
      nums1[lastIndex] = nums2[nIndex];
      nIndex--;
    }
    lastIndex--;
  }
}

var merge2 = function (nums1, m, nums2, n) {
  nums1.splice(m);
  nums2 = nums2.splice(0, n);

  let indexM = 0;
  let indexN = 0;
  while (indexN < n) {
    if (nums2[indexN] <= nums1[indexM] || nums1[indexM] === undefined) {
      nums1.splice(indexM, 0, nums2[indexN]);
      indexN++;
    } else {
      indexM++;
    }
  }
};
