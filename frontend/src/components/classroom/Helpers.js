export const generateNumber = (max) => {
  return Math.floor(Math.random() * (max + 1));
};

export const generateProblem = (num) => {
  return {
    numberOne: generateNumber(num),
    numberTwo: generateNumber(num),
    operator: ["+", "-", "x"][generateNumber(2)],
  };
};
