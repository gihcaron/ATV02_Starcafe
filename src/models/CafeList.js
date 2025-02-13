const Cafe = require('./Cafe');

class CafeList {
    constructor() {
        this.cafes = [];
        this.proximoId = 1;
    }

    adiconarCafe(nome, cliente, valor, descricao) { 
        const novoCafe = new Cafe (this.proximoId++, nome, cliente, valor, descricao);
        this.cafes.push(novoCafe);
    }

    listarCafes(){
        return this.cafes;
    }

    buscarCafePorId(id){
        return this.cafes.find(cafe => cafe.id === id);
    }

    removerCafe(id){
        const index = this.cafes.findIndex(cafe => cafe.id === id);
         
        if(index !== -1){
            return this.cafes.splice(index,1) [0];
        }
        
        return null;
    }
}

module.exports = CafeList;