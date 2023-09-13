class Carro {
  // Membro privado
  #ligado= false;
  constructor(marca, modelo, ano) {
      this.marca = marca; // Membro público
      this.modelo = modelo; // Membro público
      this.ano = ano; // Membro público      
  }

  acelerar() {
      if (this.#ligado) {
          console.log(`${this.marca} ${this.modelo} Acelerando...`);
      } else {
          console.log(`${this.marca} ${this.modelo} está desligado. Não é possível acelerar.`);
      }
  }

  frear() {
      if (this.#ligado) {
          console.log(`${this.marca} ${this.modelo} Freando...`);
      } else {
          console.log(`${this.marca} ${this.modelo} está desligado. Não é possível frear.`);
      }
  }

  ligar() {
      this.#ligado = true;
      console.log(`${this.marca} ${this.modelo} foi ligado.`);
  }

  desligar() {
      this.#ligado = false;
      console.log(`${this.marca} ${this.modelo} foi desligado.`);
  }
}


// Criar uma instância de Carro
const meuCarro = new Carro('Toyota', 'Corolla', 2023);

// Tentar acessar diretamente a propriedade privada #ligado (deve resultar em um erro)
//console.log(meuCarro.#ligado); // Isso resultará em um erro, pois #ligado é privado

// Ligar o carro
meuCarro.ligar();

// Acelerar o carro (deve funcionar)
meuCarro.acelerar(); // Saída: Toyota Corolla Acelerando...

// Tentar acessar diretamente a propriedade privada #ligado novamente (deve resultar em um erro)
//console.log(meuCarro.#ligado); // Isso resultará em um erro, pois #ligado é privado