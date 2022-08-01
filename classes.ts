// Construção da classe;
class Vehicle {
  drive(): void {
    console.log('vrum vrum');
  }

  honk(): void {
    console.log('bee beeeep!')
  }
}

// Instância da classe:
const vehicle = new Vehicle();
vehicle.drive();
vehicle.honk();