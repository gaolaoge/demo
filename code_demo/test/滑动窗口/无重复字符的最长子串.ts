/**
 * 无重复字符的最长子串
 * 给定一个字符串 s ，找出其中不含有重复字符的 最长子串 的长度。
 *
 * https://leetcode.cn/problems/longest-substring-without-repeating-characters/submissions/486337432/?envType=study-plan-v2&envId=top-interview-150
 */

function lengthOfLongestSubstring(s: string): number {
  const map = [];
  let maxLen = 0;
  let endIndex = 0;
  let similarIndex = -1;
  while (endIndex < s.length) {
    similarIndex = map.findIndex((item) => item === s[endIndex]);
    if (similarIndex != -1) {
      map.splice(0, similarIndex + 1);
    }
    map.push(s[endIndex]);
    maxLen = Math.max(maxLen, map.length);
    endIndex++;
  }
  return maxLen;
}
