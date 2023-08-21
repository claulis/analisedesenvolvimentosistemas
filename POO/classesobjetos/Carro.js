class Carro{
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
      }
      acelerar() {
        console.log(`${this.marca} ${this.modelo} Acelerando...`);
      }
      frear() {
        console.log(`${this.marca} ${this.modelo} Freando...`);
      }
}

const carro1= new Carro("Maserati","Gran Turismo", 2016);
carro1.acelerar();
carro1.frear();
const carro2= new Carro("Alfa Romeo","Mito","2015");
carro2.acelerar();
carro2.frear();