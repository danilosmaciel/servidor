const { Endereco } = require('../models');

exports.processaEnderco = function(req, res){
    Endereco.create({ 
        id: req.body.id,
        clienteId: req.body.cliente,
        logradouro: req.body.rua,
        numero: req.body.numero,
        bairro: req.body.bairro,
        cidade: req.body.cidade
    }).then( enderecoNovo =>{
        if(enderecoNovo){
            console.log("cadastro de endereco realizado");
            let resposta= {id:enderecoNovo.id,status:'enderecorecebido'};
            res.json(resposta);
        }
     }).catch(function(err){
        console.log("Erro no cadastro de endereco \n"+err);
    });
  }
