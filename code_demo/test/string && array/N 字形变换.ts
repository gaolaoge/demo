/**
 * N 字形变换
 * 将一个给定字符串 s 根据给定的行数 numRows ，以从上往下、从左到右进行 Z 字形排列。
 * 比如输入字符串为 "PAYPALISHIRING" 行数为 3 时，排列如下：
 * P   A   H   N
 * A P L S I I G
 * Y   I   R
 *
 * 之后输出需要从左往右逐行读取，产生出一个新的字符串，比如："PAHNAPLSIIGYIR"。
 *
 * 示例 1：
 * 输入：s = "PAYPALISHIRING", numRows = 3
 * 输出："PAHNAPLSIIGYIR"
 *
 * https://leetcode.cn/problems/zigzag-conversion/
 */

function convert(s: string, numRows: number): string {
  if (numRows === 1) {
    return s;
  }
  const res = Array(numRows).fill("");
  let currRow = 0;
  let index = 0;
  const len = s.length;
  let direction: "down" | "right" = "down";
  while (index < len) {
    if (direction === "down") res[currRow++] += s[index];
    if (direction === "right") res[currRow--] += s[index];
    if (currRow === 0) direction = "down";
    if (currRow === numRows - 1) direction = "right";
    index++;
  }
  return res.join("");
}
