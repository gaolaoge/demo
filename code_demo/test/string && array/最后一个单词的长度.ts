/**
 * 最后一个单词的长度
 * 
 * 一个字符串 s，由若干单词组成，单词前后用一些空格字符隔开。返回字符串中 最后一个 单词的长度。
 * 单词 是指仅由字母组成、不包含任何空格字符的最大子字符串。
 * 
 * https://leetcode.cn/problems/length-of-last-word/description/?envType=study-plan-v2&envId=top-interview-150
*/

function lengthOfLastWord(s: string): number {
    return (s.split(/ +/).filter(item => item).pop() || '').length;
};