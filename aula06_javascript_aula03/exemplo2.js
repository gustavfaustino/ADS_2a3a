class Livro {
    constructor(pNome, pPreco) {
        this.Nome = pNome;
        this.Preco = pPreco
    }

    get Nome() { return this.Nome; }
    set Nome(pNome) { this.nome = pNome; }
    
    get Preco() { return this.Preco; }
    set Preco(pPreco) { this.preco = pPreco; }
}
var obj_livro1 /* mas poderia ser qualquer nome*/ = new Livro("Use a cabeça Java", 100);
console.log("Nome do livro: " + obj_livro1.nome+"\ne custa: "+ obj_livro1.preco+" reais");
