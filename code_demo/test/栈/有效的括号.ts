/**
 * 有效的括号
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
 * 有效字符串需满足：
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 * 每个右括号都有一个对应的相同类型的左括号。
 *
 * 示例：
 * 输入：s = "()"
 * 输出：true
 *
 * https://leetcode.cn/problems/valid-parentheses/description/?envType=study-plan-v2&envId=top-interview-150
 *
 */

function isValid(s: string): boolean {
  if (s.length % 2 === 1) {
    return false;
  }
  const arr: string[] = [];
  let temp;
  let index = 0;
  while (index < s.length) {
    if (/[({[]/.test(s[index])) {
      arr.push(s[index]);
    } else {
      temp = arr.pop();
      if (!temp) {
        return false;
      }
      if (temp === "(" && s[index] !== ")") {
        return false;
      }
      if (temp === "[" && s[index] !== "]") {
        return false;
      }
      if (temp === "{" && s[index] !== "}") {
        return false;
      }
    }
    index++;
  }
  if (arr.length > 0) {
    return false;
  }
  return true;
}
