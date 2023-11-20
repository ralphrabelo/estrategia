class Aluno{

    //private não é aceito em javacript. somente typescript
    //_ (underscore) vem para ajudar na criação de atributos "privados"
    constructor(id, nome, email, nota){
        this._id = id; 
        this._nome = nome;
        this._email = email;
        this._nota = nota;
        this._nivelConhecimento = 0;
        this._cursos = [];
    }

    //get e não getId é a forma para acessar atribtutos definida no es6
    get id(){
        return this._id;
    }
    get nome(){
        return this._nome;
    }
    set nome(nomeNovo){
        this._nome = nomeNovo;
    }
    get email(){
        return this._email;
    }
    get nota(){
        return this._nota;
    }

    get cursos(){
        return this._cursos;
    }
    set nivelConhecimento(nivelConhecimento){
        this._nivelConhecimento = nivelConhecimento;
    }
    get nivelConhecimento(){
        return this._nivelConhecimento;
    }
    contratar(curso){
        this.cursos.push(curso);
    }
    estudar(){
        this.nivelConhecimento++;
    }

    get totalGasto(){
        return this._cursos.map(c => c.preco).reduce((a,b) => a+b);
    }

    toString(){
        return 'ID: '+ this.id+ ' Nome: '+ this.nome + ' Nota: ' + this.nota + ' Nível de Conhecimento: ' + this.nivelConhecimento + ' Email: ' + this.email + ' - Cursos: '+ this.cursos+ '<br/>';
    }

}