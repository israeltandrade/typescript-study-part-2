class Vehicle {
  color: string;

  constructor(color: string) {
    this.color = color;
  }

  protected honk(): void {
    console.log('bee beeeep!')
  }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);

// Enquanto o construtor da classe carro não existir, será invocado o
// construtor da classe pai (Vehicle).
class Car extends Vehicle {
  // Construtor não especifíca modificador de parâmetro para color, para que
  // ele possa se referir à classe pai.
  constructor(public wheels: number, color: string) {
    // A chamada super foi exigida para construtor em classe derivada:
    super(color);
  }
  
  private drive(): void {
    console.log('vuruuuuuuuum!');
  }

  private showColor(): void {
    console.log(this.color);
  }

  public startDrivingProcess(): void {
    this.drive();
    this.honk();
    this.showColor();
  }
}

// Agora dois argumentos devem ser passados ao construtor de Car:
const car = new Car(4, 'azul');
car.startDrivingProcess();