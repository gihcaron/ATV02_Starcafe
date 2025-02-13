const { parse } = require("dotenv");
const CafeList = require("../models/CafeList");
const listaCafes = require("../models/CafeList");

const listarCafes = (req, res) => {
    res.json(listaCafes.listarCafes());

};

const adicionarCafe = (req,res) => {
    const {nome, cliente, valor, descricao} = req.body;
    if(!nome || !cliente || !valor || !descricao){
        return res.status(400).json({erro: "Todos os campos são obrigatórios!"});
    }

const novoCafe = listaCafes.adicionarCafe(nome, cliente, valor, descricao);
res.status(201).json(novoCafe);
};

const buscarCafePorId = (req, res) => {

    const cafe = CafeList.buscarCafePorId(parseInt(req.params.id));

    if(!cafe){
        return res.status(404).json({erro: "Café não encontrado! 🤷‍♂️"});

    }

    res.json(cafe);
};

const removerCafe = (req, res) => {

    const cafeRemovido = CafeList.removerCafe(parseInt(req.params.id));

    if (!cafeRemovido){
        return res.status(404).json({erro: "Café não encontrado! 🤷‍♂️"});
    }

    res.json({mensagem: "Café removido com grande sucesso!! ✨☕", cafeRemovido});
};

module.exports = {listarCafes, adicionarCafe, buscarCafePorId, removerCafe};