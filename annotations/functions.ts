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

const forecast = {
  date: new Date(),
  weather: 'sunny'
};

const logWeather = (forecast: { date: Date, weather: string}): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
};

// Desestruturação alla ES1015
const logWeather = ({ date, weather }) => {
  console.log(date);
  console.log(weather)
};

// Alla typescript substituir variável pela declaração desestruturada):
// Note que a desestruturação e os parâmetros são partes separadas.
const logWeather = ({date, weather}: { date: Date, weather: string}): void => {
  console.log(date);
  console.log(weather);
};

logWeather(todaysWeather)