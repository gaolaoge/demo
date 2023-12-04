/**
 * 最小栈
 * 设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。
 *
 * 实现 MinStack 类:
 *
 * MinStack() 初始化堆栈对象。
 * void push(int val) 将元素val推入堆栈。
 * void pop() 删除堆栈顶部的元素。
 * int top() 获取堆栈顶部的元素。
 * int getMin() 获取堆栈中的最小元素。
 *
 * https://leetcode.cn/problems/min-stack/description/?envType=study-plan-v2&envId=top-interview-150
 */

class MinStack {
  list;
  minList;
  constructor() {
    this.list = [];
    this.minList = [];
  }

  push(val: number): void {
    this.list.push(val);
    if (this.minList.length === 0 || this.minList[this.minList.length - 1] >= val) {
      this.minList.push(val);
    }
  }

  pop(): void {
    const val = this.list.pop();
    if (this.minList[this.minList.length - 1] === val) {
      this.minList.pop();
    }
  }

  top(): number {
    if (this.list.length === 0) {
      return NaN;
    }
    return this.list[this.list.length - 1];
  }

  getMin(): number {
    return this.minList[this.minList.length - 1];
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
