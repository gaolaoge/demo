/**
 * 两数相加
 * 两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。
 * 将两个数相加，并以相同形式返回一个表示和的链表。
 * 可以假设除了数字 0 之外，这两个数都不会以 0 开头。
 *
 * 输入：l1 = [2,4,3], l2 = [5,6,4]
 * 输出：[7,0,8]
 * 解释：342 + 465 = 807.
 *
 * https://leetcode.cn/problems/add-two-numbers/description/?envType=study-plan-v2&envId=top-interview-150
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function addTwoNumbers(l1, l2) {
  let val = 0;
  let add = false;
  let count = "";
  while (l1 || l2) {
    val = (l1?.val || 0) + (l2?.val || 0) + (add ? 1 : 0);
    add = val >= 10;
    count += add ? val - 10 : val;
    l1 = l1?.val !== undefined ? l1.next : null;
    l2 = l2?.val !== undefined ? l2.next : null;
  }
  if (add) {
    count += 1;
  }

  const res = new ListNode();
  let temp = res;
  let index = 0;
  while (index < count.length) {
    temp.next = new ListNode(Number(count[index]));
    temp = temp.next;
    index++;
  }
  return res.next;
}
