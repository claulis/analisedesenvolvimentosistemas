// Classe base Personagem
class Personagem {
    #nome;     // Propriedades privadas
    #classe;
    #saude;
  
    constructor(nome, classe) {
      this.#nome = nome;
      this.#classe = classe;
      this.#saude = 100;
    }
  
    atacar(alvo) {
      console.log(`${this.#nome} ataca ${alvo.getNome()}!`);
    }
  
    receberDano(dano) {
      this.#saude -= dano;
      console.log(`${this.#nome} recebeu ${dano} de dano. Saúde restante: ${this.#saude}`);
    }
  
    getNome() {
      return this.#nome;
    }
  }
  
  // Classe Herói que herda de Personagem
  class Heroi extends Personagem {
    #arma;
  
    constructor(nome, classe, arma) {
      super(nome, classe);
      this.#arma = arma;
    }
  
    usarHabilidadeEspecial() {
      console.log(`${this.getNome()} usa uma habilidade especial!`);
    }
  }
  
  // Classe Inimigo que herda de Personagem
  class Inimigo extends Personagem {
    #tipo;
  
    constructor(nome, classe, tipo) {
      super(nome, classe);
      this.#tipo = tipo;
    }
  
    atacar(alvo) {
      console.log(`${this.getNome()} ataca ${alvo.getNome()} com ferocidade!`);
    }
  }
  
  // Uso das classes
  const heroi = new Heroi("Herói", "Guerreiro", "Espada");
  const inimigo = new Inimigo("Inimigo", "Orc", "Monstro");
  
  heroi.atacar(inimigo);
  inimigo.receberDano(20);
  inimigo.atacar(heroi);
  heroi.receberDano(15);
  heroi.usarHabilidadeEspecial();
  