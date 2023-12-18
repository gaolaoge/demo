import { sum } from "./math";
import { describe, test } from "@jest/globals";

describe("math module", () => {
  test("should return sum result when two number plus", () => {
    const number = 10;
    const anotherNumber = 20;
    const result = sum(number, anotherNumber);
    expect(result).toEqual(30);
  });
});
