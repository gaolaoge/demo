class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// 快慢针
// 问：兔子会不会「跳过」乌龟，从来不会和乌龟相遇呢？
// 答：不会。如果有环，那么兔子和乌龟最终都会进入环中。这时用「相对速度」思考，乌龟不动，兔子相对乌龟每次只走一步，这样就可以看出兔子一定会和乌龟相遇。

function hasCycle(head: ListNode | null): boolean {
  let fast = head;
  let slow = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow?.next;
    if (fast === slow) {
      return true;
    }
  }
  return false;
}
