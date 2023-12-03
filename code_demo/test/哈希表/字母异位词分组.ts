/**
 * 字母异位词分组
 * 一个字符串数组，请你将 字母异位词 组合在一起。可以按任意顺序返回结果列表。
 * 字母异位词 是由重新排列源单词的所有字母得到的一个新单词。
 *
 * 示例:
 * 输入: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
 * 输出: [["bat"],["nat","tan"],["ate","eat","tea"]]
 *
 * https://leetcode.cn/problems/group-anagrams/description/?envType=study-plan-v2&envId=top-interview-150
 *
 */

function groupAnagrams(strs: string[]): string[][] {
  const map = new Map();
  let key;
  strs.forEach(item => {
    key = item
      .split("")
      .map(letter => letter.charCodeAt(0))
      .sort((a, b) => a - b)
      .join("");
    if (map.has(key)) {
      map.get(key).push(item);
    } else {
      map.set(key, [item]);
    }
  });
  return Array.from(map.values());
}
