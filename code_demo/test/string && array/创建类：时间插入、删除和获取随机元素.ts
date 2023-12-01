/**
 * 创建类：时间插入、删除和获取随机元素
 * 实现RandomizedSet 类：
 * RandomizedSet() 初始化 RandomizedSet 对象
 * bool insert(int val) 当元素 val 不存在时，向集合中插入该项，并返回 true ；否则，返回 false 。
 * bool remove(int val) 当元素 val 存在时，从集合中移除该项，并返回 true ；否则，返回 false 。
 * int getRandom() 随机返回现有集合中的一项（测试用例保证调用此方法时集合中至少存在一个元素）。每个元素应该有 相同的概率 被返回。
 * 你必须实现类的所有函数，并满足每个函数的 平均 时间复杂度为 O(1) 。
 * 
 * https://leetcode.cn/problems/insert-delete-getrandom-o1/
*/

class RandomizedSet {
    list
    mirror

    constructor() {
        this.list = new Set();
        this.mirror = [];
        return this;
    }

    insert(val: number): boolean {
        const status = this.list.has(val);
        if (!status) {
            this.list.add(val);
            this.mirror.push(val);
        }
        return !status;
    }

    remove(val: number): boolean {
        const status =  this.list.delete(val);
        if (status) {
            this.mirror.splice(this.mirror.findIndex(value => value === val), 1);
        }
        return status;
    }

    getRandom(): number {
        return this.mirror[Math.floor(Math.random() * this.mirror.length)];
    }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */