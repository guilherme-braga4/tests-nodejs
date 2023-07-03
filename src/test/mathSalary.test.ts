import { mathSalary } from "../index";

test("should calculate the cost of an employee", () => {
  const salary = 24000;
  const hour = 150;
  const monthWorkShift = 160;

  expect(mathSalary(hour, monthWorkShift)).toBe(salary);
});
