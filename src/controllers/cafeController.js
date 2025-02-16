const CafeList = require("../models/CafeList");

const lista = new CafeList();

const cafe1 = lista.adicionarCafe("Café do Dia", 5.20, "Café preto Expresso");
const cafe2 = lista.adicionarCafe("Café da Casa", 7.00, "Café do dia com leite e caramelo");
const cafe3 = lista.adicionarCafe("Café Candy", 8.00, "Café com leite e Marshmallow");
const cafe4 = lista.adicionarCafe("Mocha Café", 9.00, "Café com leite, chocolate e chantilly");
const cafe5 = lista.adicionarCafe("Capucinno ", 6.00, "Café com pouco leite e muito chantilly");
const cafe6 = lista.adicionarCafe("Café Árabe", 10.00, "Café com especiarias");


const listarCafes = (req, res) => {
    res.json(lista.listarCafes());

};

const adicionarCafe = (req,res) => {
    const {nome, valor, descricao, cliente, status} = req.body;
    if(!nome || !valor || !descricao || !cliente || !status){
        return res.status(400).json({erro: "Todos os campos são obrigatórios!"});
    }

const novoCafe = lista.adicionarCafe(nome,valor, descricao, cliente, status);
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
    if (cafeRemovido.status !== "Pedido" || cafeRemovido.status !== "Pendente") {
        return res.status(400).json({erro: "Só é possível remover cafés se ele estiver apenas pedido ou pendente!"});
    }
    if (!cafeRemovido){
        return res.status(404).json({erro: "Café não encontrado! 🤷‍♂️"});
    }

    res.json({mensagem: "Café removido com grande sucesso!! ✨☕", cafeRemovido});
};

module.exports = {listarCafes, adicionarCafe, buscarCafePorId, removerCafe};