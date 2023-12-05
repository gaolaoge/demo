/**
 * 合并两个有序链表
 * 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
 *
 * https://leetcode.cn/problems/merge-two-sorted-lists/?envType=study-plan-v2&envId=top-interview-150
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeTwoLists1(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  let a = list1;
  let b = list2;
  const res = new ListNode();
  let curr = res;
  while (a && b) {
    if (a.val <= b.val) {
      curr.next = a;
      a = a.next;
    } else {
      curr.next = b;
      b = b.next;
    }
    curr = curr.next;
  }
  curr.next = a ?? b;

  return res.next;
}

function mergeTwoLists2(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  if (!list1 || !list2) {
    return list1 || list2;
  }

  if (list1.val <= list2.val) {
    list1.next = mergeTwoLists2(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoLists2(list1, list2.next);
    return list2;
  }
}
