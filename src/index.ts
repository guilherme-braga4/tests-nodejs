import { random } from "lodash";

export const mathSalary = (hours: number, hourSalary: number): number => {
  const result = hours * hourSalary;
  return result;
};

interface fruitArray {
  name: string;
  weight: number;
}

export const fruitWeight = (array: fruitArray[]) => {
  const weight = array.map((fruit) => fruit.weight);

  if (weight.some((weight) => weight == 0)) {
    throw new Error("There is impossible");
  }

  return weight;
};

const drawGender = (): Promise<string> =>
  new Promise((resolve) => {
    setTimeout(() => {
      const gender = random(0, 1) < 0.5 ? "boy" : "girl";
      resolve(gender);
    }, 1000);
  });

export const babyGenderSort = async (quantity: number): Promise<string[]> => {
  if (quantity <= 0) {
    throw new Error("Invalid quantity");
  }

  const genders: string[] = await Promise.all(
    Array.from({ length: quantity }, () => drawGender())
  );
  return genders;
};
