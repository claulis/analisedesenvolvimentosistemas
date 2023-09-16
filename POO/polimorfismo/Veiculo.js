class Veiculo {
    constructor(modelo, ano) {
      this.modelo = modelo;
      this.ano = ano;
    }
  
    calcularCustoEnvio(distancia) {
      console.log(`Custo de envio para ${this.modelo}: ${distancia * this.calcularTaxa()}`);
    }
  
    calcularTaxa() {
      return 0; // Taxa genérica, será sobrescrita nas classes filhas
    }
  }
  
  class Caminhao extends Veiculo {
    calcularTaxa() {
      return 2.5; // Taxa por quilômetro para caminhões
    }
  }
  
  class Carro extends Veiculo {
    calcularTaxa() {
      return 1.5; // Taxa por quilômetro para carros
    }
  }
  
  class Moto extends Veiculo {
    calcularTaxa() {
      return 1.0; // Taxa por quilômetro para motos
    }
  }

  
const meuCaminhao = new Caminhao("Volvo", 2022);
const meuCarro = new Carro("Toyota", 2021);
const minhaMoto = new Moto("Honda", 2020);

meuCaminhao.calcularCustoEnvio(200); // Saída: Custo de envio para Volvo: 500.0
meuCarro.calcularCustoEnvio(200);    // Saída: Custo de envio para Toyota: 300.0
minhaMoto.calcularCustoEnvio(200);    // Saída: Custo de envio para Honda: 200.0
