// 可以为除 日期 以外的任意类型
function log<T>(x: T extends Date ? never : T) {
  console.log(x);
}
log("");

type NotDate<T> = T extends Date ? never : T;

function log2<T>(x: NotDate<T>) {
  console.log(x);
}

log2("");

type NotType<T, E> = T extends E ? never : T;

function log3<T>(x: NotType<T, Date>) {
  console.log(x);
}

log3("");
