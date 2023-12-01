/**
 * 最长公共前缀
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 如果不存在公共前缀，返回空字符串 ""。
 * 
 * 示例 1：
 * 输入：strs = ["flower","flow","flight"]
 * 输出："fl"
 * 
 * https://leetcode.cn/problems/longest-common-prefix/description/?envType=study-plan-v2&envId=top-interview-150
*/

function longestCommonPrefix(strs: string[]): string {
    let index = 0;
    let startStr = '';
    const minLen = Math.min(...strs.map(str => str.length));
    while (index < minLen) {
        startStr = strs[0].slice(0, index + 1);
        if (!strs.every(str => str.startsWith(startStr))) {
            break;
        }
        index ++;
    }
    return strs[0].slice(0, index);
};


