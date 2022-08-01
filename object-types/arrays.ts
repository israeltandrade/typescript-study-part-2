const carMakers = ['ford', 'toyota', 'chevy'];

const car = carMakers[0];
const myCar = carMakers.pop();
const myCar2 = carMakers.shift();
carMakers.push('final');
carMakers.unshift('começo');

const experimento = carMakers.map((car: string): string => {
  return car.toUpperCase();
})

console.log(carMakers);
console.log(experimento);
console.log(myCar);
console.log(myCar2);

// Flexible types
// Inferência pressupõe dois tipos possíveis com pipe:
const importantDates = [new Date(), '2010-10-10']
// Usando type notation:
const importantDates2: (Date | string)[] = [new Date(), '2010-10-10']

importantDates2.push('2030-10-10');
importantDates2.push(new Date());
importantDates2.push(100);