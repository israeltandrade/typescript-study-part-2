// Agora a interface exige menos coisas:
interface Reportable {
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


const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

// O objeto "oldCivic" é passado como parâmetro da função:
printSummary(oldCivic);