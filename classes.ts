class Vehicle {
  drive(): void {
    console.log('vrum vrum');
  }

  honk(): void {
    console.log('bee beeeep!')
  }
}

// Classe que herda tudo da classe pai:
class Car extends Vehicle {
  // Override no método drive (substitui o da classe pai):
  drive(): void {
    console.log('vuruuuuuuuum!')
  }
}

// Instância da 2ª classe:
const car = new Car();
car.drive();
car.honk();