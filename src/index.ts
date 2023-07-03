const mathSalary = (hours: number, hourSalary: number): number => {
  const result = hours * hourSalary;
  return result;
};

console.log("mathSalary", mathSalary(160, 150));
