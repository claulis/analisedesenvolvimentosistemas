class Personagem {
    #nome;
    #saude;
  
    constructor(nome, saúde) {
      this.#nome = nome; // Propriedades privadas
      this.#saude = saúde;
    }
  
    atacar(alvo) {
      console.log(`${this.#nome} ataca ${alvo.getNome()}!`);
    }
  
    getNome() {
      return this.#nome;
    }
  
    getSaúde() {
      return this.#saude;
    }
  
    setSaude(novaSaúde) {
      if (novaSaúde >= 0) {
        this.#saude = novaSaúde;
      } else {
        console.log("A saúde não pode ser um valor negativo.");
      }
    }
  }
  
  // Função construtora Herói que herda de Personagem
  class Heroi extends Personagem {
    #arma;
  
    constructor(nome, saúde, arma) {
      super(nome, saúde); // Chamando o construtor de Personagem
      this.#arma = arma;
    }
  
    usarHabilidadeEspecial() {
      console.log(`${this.getNome()} usa uma habilidade especial!`);
    }
  
    getArma() {
      return this.#arma;
    }
  }
  
  // Estabelecendo a herança
  Heroi.prototype = Object.create(Personagem.prototype);
  Heroi.prototype.constructor = Heroi;
  
  // Criando instâncias
  const heroi = new Heroi("Herói", 100, "Espada");
  
  heroi.atacar({ getNome: () => "Inimigo" });
  heroi.usarHabilidadeEspecial();
  
  console.log(`Saúde do Herói: ${heroi.getSaúde()}`);
  console.log(`Arma do Herói: ${heroi.getArma()}`);
  heroi.setSaude(80);
  console.log(`Nova saúde do Herói: ${heroi.getSaúde()}`);
  