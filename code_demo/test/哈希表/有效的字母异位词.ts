/**
 * 有效的字母异位词
 * 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
 * 注意：若 s 和 t 中每个字符出现的次数都相同，则称 s 和 t 互为字母异位词。
 *
 * 示例 1:
 * 输入: s = "anagram", t = "nagaram"
 * 输出: true
 * 示例 2:
 *
 * 输入: s = "rat", t = "car"
 * 输出: false
 *
 * https://leetcode.cn/problems/valid-anagram/description/?envType=study-plan-v2&envId=top-interview-150
 */

function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }
  let index = 0;
  const sObj = {};
  const tObj = {};
  while (index < s.length) {
    sObj[s[index]] ? sObj[s[index]]++ : (sObj[s[index]] = 1);
    tObj[t[index]] ? tObj[t[index]]++ : (tObj[t[index]] = 1);
    index++;
  }
  for (let key in sObj) {
    if (!sObj.hasOwnProperty(key)) {
      continue;
    }
    if (!tObj[key] || sObj[key] !== tObj[key]) {
      return false;
    }
  }
  return true;
}
