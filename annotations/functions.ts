const add = (a: number, b: number): number => {
  return a + b;
};

function divide(a: number, b: number): number {
  return a / b;
};

const multiply = function(a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);
};

// Usamos never quando temos certeza de nunca retornar nada
// com a função.
const throwError = (message: string): never => {
  throw new Error(message);
};

// Uso mais comum:
const throwError = (message: string): string => {
  if (!message) {
    throw new Error(message);
  }
  return message;
};