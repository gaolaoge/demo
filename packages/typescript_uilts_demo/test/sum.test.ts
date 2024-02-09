import { sum } from "../src/index";

test("测试 sum ", () => {
  const res = sum(1, 2);
  expect(res).toBe(3);
});
