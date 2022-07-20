const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true
};

// A tipagem dos parâmetros da função a seguir não é muito prática
// O que justifica a utilização de interfaces.
const printVehicle = (vehicle: { name: string; year: number; broken: boolean }): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken? ${vehicle.broken}`);
};

// O objeto "oldCivic" é passado como parâmetro da função:
printVehicle(oldCivic);