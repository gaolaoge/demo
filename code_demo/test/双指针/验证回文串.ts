/**
 * 验证回文串
 * 如果在将所有大写字符转换为小写字符、并移除所有非字母数字字符之后，短语正着读和反着读都一样。则可以认为该短语是一个 回文串 。
 * 字母和数字都属于字母数字字符。
 *
 * 一个字符串 s，如果它是 回文串 ，返回 true ；否则，返回 false 。
 *
 * 示例 1：
 * 输入: s = "A man, a plan, a canal: Panama"
 * 输出：true
 * 解释："amanaplanacanalpanama" 是回文串。
 *
 * https://leetcode.cn/problems/valid-palindrome/description/?envType=study-plan-v2&envId=top-interview-150
 */

function isPalindrome(s: string): boolean {
  const arr = s.match(/[A-Za-z0-9]+/g);
  if (!arr) {
    return true;
  }

  const str = arr.join("").toLowerCase();
  let index = 0;
  const len = str.length;
  while (index < Math.floor(len / 2)) {
    if (str[index] !== str[len - 1 - index]) {
      return false;
    }
    index++;
  }
  return true;
}
