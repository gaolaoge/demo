/**
 * 同构字符串
 * 给定两个字符串 s 和 t ，判断它们是否是同构的。
 * 如果 s 中的字符可以按某种映射关系替换得到 t ，那么这两个字符串是同构的。
 * 每个出现的字符都应当映射到另一个字符，同时不改变字符的顺序。不同字符不能映射到同一个字符上，相同字符只能映射到同一个字符上，字符可以映射到自己本身。
 *
 * https://leetcode.cn/problems/isomorphic-strings/?envType=study-plan-v2&envId=top-interview-150
 */

function isIsomorphic(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }
  const sMap = new Map();
  const tMap = new Map();
  let index = 0;
  while (index < s.length) {
    if (!sMap.has(s[index]) && !tMap.has(t[index])) {
      sMap.set(s[index], t[index]);
      tMap.set(t[index], s[index]);
    }
    if (s[index] !== tMap.get(t[index]) || sMap.get(s[index]) !== t[index]) {
      return false;
    }
    index++;
  }
  return true;
}
