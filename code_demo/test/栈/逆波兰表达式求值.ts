/**
 * 逆波兰表达式求值
 * 一个字符串数组 tokens ，表示一个根据 逆波兰表示法 表示的算术表达式。
 * 计算该表达式。返回一个表示表达式值的整数。
 *
 * 注意：
 * 有效的算符为 '+'、'-'、'*' 和 '/' 。
 * 每个操作数（运算对象）都可以是一个整数或者另一个表达式。
 * 两个整数之间的除法总是 向零截断 。
 * 表达式中不含除零运算。
 * 输入是一个根据逆波兰表示法表示的算术表达式。
 * 答案及所有中间计算结果可以用 32 位 整数表示。
 *
 * 示例：
 * 输入：tokens = ["2","1","+","3","*"]
 * 输出：9
 * 解释：该算式转化为常见的中缀算术表达式为：((2 + 1) * 3) = 9
 *
 * https://leetcode.cn/problems/evaluate-reverse-polish-notation/description/?envType=study-plan-v2&envId=top-interview-150
 */

function evalRPN(tokens: string[]): number {
  const stack: string[] = [];
  let index = 0;
  let sum = 0;
  let left, right;
  const operation = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => (a / b > 0 ? Math.floor(a / b) : Math.ceil(a / b))
  };
  while (index < tokens.length) {
    if (/\d/.test(tokens[index])) {
      stack.push(tokens[index]);
    } else {
      right = Number(stack.pop());
      left = Number(stack.pop());
      sum = operation[tokens[index]](left, right);
      stack.push(String(sum));
    }
    index++;
  }
  return Number(stack[0]);
}
