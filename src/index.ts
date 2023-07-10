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
  console.log(
    "s",
    weight.find((weight) => weight == 0)
  );
  if (weight.some((weight) => weight == 0)) {
    throw new Error("There is impossible");
  }

  return weight;
};
