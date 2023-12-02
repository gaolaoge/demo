/**
 * 判断子序列
 * 给定字符串 s 和 t ，判断 s 是否为 t 的子序列。
 * 字符串的一个子序列是原始字符串删除一些（也可以不删除）字符而不改变剩余字符相对位置形成的新字符串。
 * （例如，"ace"是"abcde"的一个子序列，而"aec"不是）。
 *
 * https://leetcode.cn/problems/is-subsequence/description/?envType=study-plan-v2&envId=top-interview-150
 */

function isSubsequence(s: string, t: string): boolean {
  if (s.length > s.length) {
    return false;
  }
  let cur = t;
  let index = 0;
  while (index < s.length) {
    const r = cur.match(s[index]);
    if (r) {
      cur = cur.slice(r.index + 1);
    } else {
      return false;
    }
    index++;
  }
  return true;
}
