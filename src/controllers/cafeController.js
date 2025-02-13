const CafeList = require("../models/CafeList");

const lista = new CafeList();

const cafe1 = lista.adicionarCafe("Café do Dia", "Amanda", 5.20, "Café do dia com leite e açúcar");
const cafe2 = lista.adicionarCafe("Café da Casa", "Marta", 7.00, "Café do dia com leite e caramelo");

const listarCafes = (req, res) => {
    res.json(lista.listarCafes());

};

const adicionarCafe = (req,res) => {
    const {nome, cliente, valor, descricao} = req.body;
    if(!nome || !cliente || !valor || !descricao){
        return res.status(400).json({erro: "Todos os campos são obrigatórios!"});
    }

const novoCafe = lista.adicionarCafe(nome, cliente, valor, descricao);
res.status(201).json(novoCafe);
};

const buscarCafePorId = (req, res) => {
    const cafe = lista.buscarCafePorId(parseInt(req.params.id));

    if(!cafe){
        return res.status(404).json({erro: "Café não encontrado! 🤷‍♂️"});

    } else {
    res.json(cafe);
    }
};

const removerCafe = (req, res) => {

    const cafeRemovido = lista.removerCafe(parseInt(req.params.id));

    if (!cafeRemovido){
        return res.status(404).json({erro: "Café não encontrado! 🤷‍♂️"});
    }

    res.json({mensagem: "Café removido com grande sucesso!! ✨☕", cafeRemovido});
};

module.exports = {listarCafes, adicionarCafe, buscarCafePorId, removerCafe};