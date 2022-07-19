const carMakers = ['ford', 'toyota', 'chevy'];

// Help with inference when extracting values
// Type inference pressupõe o tipo string a seguir:
const car = carMakers[0];
const myCar = carMakers.pop();
const myCar2 = carMakers.shift();
carMakers.push('final');
carMakers.unshift('começo');

// Prevent incompatible values
// carMakers.push(100);

// Help with 'map'
const experimento = carMakers.map((car: string): string => {
  return car.toUpperCase();
})

console.log(carMakers);
console.log(experimento);
console.log(myCar);
console.log(myCar2);
