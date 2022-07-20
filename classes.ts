class Vehicle {
  // Método protegido só pode ser acessado pela classe e classes herdeiras:
  protected honk(): void {
    console.log('bee beeeep!')
  }
}

class Car extends Vehicle {
  // Método privado:
  private drive(): void {
    console.log('vuruuuuuuuum!')
  }

  public startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car();
car.startDrivingProcess();