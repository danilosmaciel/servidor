const { Produto } = require('../models');


exports.processaProdutos = function(res){
    Produto.findAll({ attributes: ["id","nome","descricao","valor","status"], model: Produto,})
     .then( produtos =>{
        res.render('pages/produtos', { retorno: produtos});
     });
  }

  exports.cadastraProdutos = function(req, res) {
    // console.log(req.body.nome + "-" + req.body.descricao + "-" + req.body.valor + "-" + req.body.status)
    Produto.findOne({
      attributes: ["nome"],
      where: {
        nome: req.body.nome
      }
    }).then(elemento => {

      Produto.create({
        nome: req.body.nome,
        descricao: req.body.descricao,
        valor: req.body.valor,
        status: req.body.status
      });

      res.redirect('/produtos');
      //produtos.processaProdutos(res);
    });
  }


  exports.carregaProdutosJson = function(req, res) {
    console.log("Chegou nos produtos....");
    Produto.findAll({
            attributes: ["id", "nome", "descricao", "valor", "status"]
        })
        .then(produtos => {
            if(produtos){
              let mensagem = "";
              console.log("AChou produtos e enviando....");
              res.json(produtos);
            }else{
              console.log("nao achou nenhum item...");
              res.json({"msg":"nao achou nenhum item.."});
            }
            
        });

    //let item = {"itens":[{"id":"1","descricao":'Hamburger', "valor": "6.56","status":"ativo"},{"id":"2","descricao":'Hamburger frango', "valor": "3.18","status":"ativo"}]};
    //res.json(item);
  }