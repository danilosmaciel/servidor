module.exports = function (app) {

    const pedidos = require('../controller/pedido.controller.js');
    app.get('/pedidos', (req, res) => {
        res.render('pages/pedidos');
     });

     app.post('/pedidos/novo', (req,res) => {
        console.log("Chegou o pedido -> " + req.body.numeropedido);
        debugger;
            if(req){
                pedidos.processaPedido(req,res);
            }
     });
}
