const { Pedido } = require('../models');
const { PedidoItem } = require('../models');

exports.processaPedido = function(req, res){
    debugger;
    let pedido = req.body;
   // let pedido = removerChave("itens", pedido);

    console.log("123 " + pedido.numeropedido);
    Pedido.create({ 
        numeropedido : pedido.numeropedido,
        valor: pedido.valor,
        enderecoId: req.body.endereco,
        clienteId: pedido.cliente,
        statuspedido: pedido.status ? pedido.status : "realizado"
    })
     .then( pedidoNovo =>{
         let textoItens = "";
         //let itens = req.body.itens;
 console.log(" pedido indo");
         if(pedidoNovo){
            console.log("Pedido gravado!");
            let retornoPedido = { numeropedido:pedidoNovo.numeropedido, status:"recebido"}
            res.json(retornoPedido);
         }else{
            console.log("Pedido não gravado!");
            let retornoPedido = { numeropedido:pedidoNovo.numeropedido, status:"falhou"}
            res.json(retornoPedido);
         }
     }).catch(function(err) {
        // print the error details
        console.log(err,req.body.numeropedido);
    });;
  }

  function removerChave(chave,meuJSON){
    meuJSON = meuJSON.filter(function(jsonObject) {
        //return jsonObject != chave;
        return obj.hasOwnProperty(chave) != chave;
    });
    console.log("Novo json-> "+ meuJSON);
    return meuJSON
}
