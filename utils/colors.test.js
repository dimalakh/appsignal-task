import { getToneByIndex } from "./colors";

describe("colors", () => {
  describe("getToneByIndex", () => {
    it("should return maximum tone for index 0", () => {
      expect(getToneByIndex(0)).toBe(900);
    });

    it("should return minimum tone for index out of range", () => {
      expect(getToneByIndex(20)).toBe(100);
    });

    it("should return correct tone for indexes 1 - 8", () => {
      expect(getToneByIndex(5)).toBe(400);
    });
  });
});
