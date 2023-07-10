import { fruitWeight } from "../index";

test("Should handle with empty fruit array", () => {
  const array = [
    { name: "Banana", weight: 20 },
    { name: "Apple", weight: 0 },
  ];

  expect(() => fruitWeight(array)).toThrow();
});
