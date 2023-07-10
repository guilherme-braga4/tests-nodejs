import { babyGenderSort } from "../index";

describe("Should reveal all gender babys", () => {
  it("Should return a array containing boy or girl", async () => {
    const result = await babyGenderSort(4);
    expect(
      result.every((gender) => gender === "boy" || gender === "girl")
    ).toBe(true);
  });
  it("Should contain 'error' on error string", async () => {
    try {
      await babyGenderSort(-1);
    } catch (err: any) {
      expect(err.message).toMatch("Invalid quantity");
    }
  });
});
