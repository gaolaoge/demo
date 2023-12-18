import expect from "expect";
import searchNames, { ConvertNameToLowerCase } from "./searchNames";
import { getNames } from "./services";

jest.mock("./services", () => ({
  getNames: jest.fn(() => ["John", "Doe", "Jane", "George", "Frank"])
}));

describe("searchNames module", () => {
  test("should return search results", () => {
    const keyword = "keyword";
    const result = searchNames(keyword);
    expect(result).toEqual([]);
  });

  test("should return target result when found search", () => {
    const keyword = "Frank";
    const result = searchNames(keyword);
    expect(result).toEqual(["Frank"]);
  });

  test("should return target result when found search2", () => {
    const keyword = "Frank";
    getNames.mockImplementation(() => ["John", "Doe", "Jane", "George", "Frank"]);
    const result = searchNames(keyword);
    expect(result).toEqual(["Frank"]);
  });

  test("should not return more than 3 matches", () => {
    getNames.mockImplementation(() => ["John", "Frank1", "Frank2", "Frank3", "Frank4"]);
    const keyword = "Frank";
    const result = searchNames(keyword);
    expect(result).toHaveLength(3);
  });

  test("should handle null or undefined as input", () => {
    getNames.mockImplementation(() => []);
    expect(searchNames(null)).toEqual([]);
    expect(searchNames(undefined)).toEqual([]);
  });

  test("should return search result is case sensitive", () => {
    getNames.mockImplementation(() => ["John"]);
    expect(searchNames("john")).toEqual([]);
  });
});

describe("convert name to Lowercase module", () => {
  test("should return same result", () => {
    const keyword = "John";
    const result = ConvertNameToLowerCase(keyword);
    // expect(result).toMatchInlineSnapshot(); // 与 Prettier v3 不兼容~
    expect(result).toEqual("john");
  });
});
