class Livro {
    constructor(titulo, autor, ano) {
      this.titulo = titulo;
      this.autor = autor;
      this.ano = ano;
    }

    infoLivro() {
      return this.titulo+" "+this.autor+" "+this.ano;
    }
}
  