class Vehicle {
  // Campos ou propriedades (sem construtor, é bom inicializar):
  // color: string = 'red';
  color: string;

  constructor(color: string) {
    this.color = color;
  }

  // A forma a seguir dispensa a definição da propriedade no começo do arquivo:
  // constructor(public color: string) {}

  protected honk(): void {
    console.log('bee beeeep!')
  }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);

class Car extends Vehicle {
  // Método privado:
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

const car = new Car('azul');
car.startDrivingProcess();