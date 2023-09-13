class Pessoa {
    // Atributos privados (convenção de nomenclatura com underscore)
     constructor(nome,idade){
     this.nome =nome; 
     this.#idade = idade;
     }
  
    // Métodos públicos para acessar e modificar atributos privados
    getNome = function() {
      return _nome;
    };
  
    this.getIdade = function() {
      return _idade;
    };
  
    this.setNome = function(novoNome) {
      _nome = novoNome;
    };
  
    this.setIdade = function(novaIdade) {
      if (novaIdade >= 0) {
        _idade = novaIdade;
      }
    };
  }
  
  const pessoa1 = new Pessoa("João", 30);
  pessoa1.
  console.log(pessoa1.getNome()); // Saída: João
  console.log(pessoa1.getIdade()); // Saída: 30
  
  pessoa1.setNome("Maria");
  console.log(pessoa1.getNome()); // Saída: Maria
  