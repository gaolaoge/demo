/**
 * 除自身以外数组的乘积
 * 一个整数数组 nums，返回 数组 answer ，其中 answer[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积 。
 * 题目数据 保证 数组 nums之中任意元素的全部前缀元素和后缀的乘积都在  32 位 整数范围内。
 * 不要使用除法，且在 O(n) 时间复杂度内完成此题。
 * 
 * https://leetcode.cn/problems/product-of-array-except-self/description/?envType=study-plan-v2&envId=top-interview-150
*/

function productExceptSelf(nums: number[]): number[] {
    const left = new Array(nums.length);
    const right = new Array(nums.length);
    const res = Array(nums.length);
    
    for (let i = 0;i < nums.length;i ++) {
        left[i] = (left[i - 1] ?? 1) * nums[i];
    }

    for (let i = nums.length - 1;i >= 0;i --) {
        right[i] = (right[i + 1] ?? 1) * nums[i];
    }

    for (let i = 0;i < res.length;i ++) {
        res[i] = (left[i - 1] ?? 1) * (right[i + 1] ?? 1);
    }

    return res;
};

/**
 * 兼容 0 值
*/