// Objeto:
const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
};

// Array com 3 tipos possíveis:
const pepsi = ['brown', true, 40];
// Como não se trata de uma tupla, informação se perde com
// novas atribuições (qual a ordem e significado dos registros?):
pepsi[0] = 40;
pepsi[2] = 'brown';
console.log(pepsi);

// Exemplo com tupla:
const pepsi2: [string, boolean, number] = ['brown', true, 40];
// Código não permite trocar os tipos:
// pepsi2[0] = 40;

// Tipagem padrão para mais variáveis:
type Drink = [string, boolean, number];
// Tuplas a seguir usam tipagem padrão a seguir:
const pepsi3: Drink = ['black', true, 35];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];