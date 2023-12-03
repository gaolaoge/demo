/**
 * 单词规律
 * 给定一种规律 pattern 和一个字符串 s ，判断 s 是否遵循相同的规律。
 * 这里的 遵循 指完全匹配，例如， pattern 里的每个字母和字符串 s 中的每个非空单词之间存在着双向连接的对应规律。
 * 
 * 示例1:
 * 输入: pattern = "abba", s = "dog cat cat dog"
 * 输出: true
 * 
 * https://leetcode.cn/problems/word-pattern/description/?envType=study-plan-v2&envId=top-interview-150
*/

function wordPattern(pattern: string, s: string): boolean {
    const arrs = s.split(' ');
    if (arrs.length !== pattern.length) {
        return false;
    }
    const map = new Map();
    const set = new Set();
    let index = 0;
    while (index < arrs.length) {
        if (!map.get(pattern[index])) {
            if (set.has(arrs[index])) {
                return false;
            }
            map.set(pattern[index], arrs[index]);
            set.add(arrs[index]);
        } else if (map.get(pattern[index]) !== arrs[index]) {
            return false;
        }
        index ++;
    }   
    return true;
};