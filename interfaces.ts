// Uma interface é um novo tipo, com primeira letra maiúscula,
// e se utiliza um termo generalizador.
interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
}

const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true
};

// Ao invés de passar a tipagem de cada parâmetro, se passa
// um objeto com a interface Vehicle:
const printVehicle = (vehicle: Vehicle): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken? ${vehicle.broken}`);
};

// O objeto "oldCivic" é passado como parâmetro da função:
printVehicle(oldCivic);