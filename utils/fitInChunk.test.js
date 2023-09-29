import { fitInChunk } from "./fitInChunk";

describe("fitInChunk", () => {
  it("should return original array if items don't contain value prop", () => {
    const arr = [1, 2, 3];

    expect(fitInChunk(arr, 1)).toEqual(arr);
  });

  it("should return truncated array with agregated others item", () => {
    const arr = [
      {
        value: 10,
      },
      {
        value: 20,
      },
      {
        value: 1,
      },
      {
        value: 5,
      },
    ];

    const result = fitInChunk(arr, 2);

    expect(result[result.length - 1]).toEqual({
      key: "Others",
      value: 6,
    });
  });

  it("should use 9 as default max length, if max length is not passed", () => {
    const arr = new Array(15).fill({ value: 10 });

    // 10 because new element was added in the end
    expect(fitInChunk(arr)).toHaveLength(10);
  });
});
