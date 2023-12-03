/**
 * 完全涵盖
 * 两个字符串：ransomNote 和 magazine ，判断 ransomNote 能不能由 magazine 里面的字符构成。
 * 如果可以，返回 true ；否则返回 false 。
 * magazine 中的每个字符只能在 ransomNote 中使用一次。
 *
 * https://leetcode.cn/problems/ransom-note/description/?envType=study-plan-v2&envId=top-interview-150
 */

function canConstruct(ransomNote: string, magazine: string): boolean {
  const arr = new Array(26).fill(0);
  const base = "a".charCodeAt(0);
  for (const val of magazine) {
    arr[val.charCodeAt(0) - base]++;
  }
  let index;
  for (const val of ransomNote) {
    index = val.charCodeAt(0) - base;
    if (arr[index] > 0) {
      arr[index]--;
    } else {
      return false;
    }
  }
  return true;
}
