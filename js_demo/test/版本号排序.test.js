// sortVersion.test.js

const sortVersion = require("./版本号排序");

describe("sortVersion", () => {
  it("should sort version numbers in ascending order", () => {
    const arr = ["1.2.3", "2.1.0", "0.3.4", "1.1.1"];
    const sortedArr = sortVersion(arr);
    expect(sortedArr).toEqual(["0.3.4", "1.1.1", "1.2.3", "2.1.0"]);
  });

  it("should handle version numbers with different number of parts", () => {
    const arr = ["1.2.3", "2.1", "0.3.4", "1.1.1"];
    const sortedArr = sortVersion(arr);
    expect(sortedArr).toEqual(["0.3.4", "1.1.1", "1.2.3", "2.1"]);
  });

  it("should handle empty array", () => {
    const arr = [];
    const sortedArr = sortVersion(arr);
    expect(sortedArr).toEqual([]);
  });
});
