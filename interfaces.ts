// Podemos passar tipos complexos e funções em uma interface:
interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
  // Agora a interface obriga a colocação de uma função com
  // retorno string nos objetos à ela associados:
  summary(): string;
}

// Objeto ajustado para comportar a interface:
const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  }
};


const printVehicle = (vehicle: Vehicle): void => {
  console.log(vehicle.summary());
};

// O objeto "oldCivic" é passado como parâmetro da função:
printVehicle(oldCivic);