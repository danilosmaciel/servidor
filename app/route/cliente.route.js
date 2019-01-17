module.exports = function (app) {

    const clientes = require('../controller/cliente.controller.js');

    app.post('/cliente/cadastro', (req, res) => {
        console.log("cadastro chegou...");
        console.log("aaaa" + req);
       clientes.processaCadastro(req, res);
    });
    app.post('/cliente/login', (req, res) => {
        console.log("login chegou...");
        clientes.processaLogin(req, res);
    });

    app.get('/clientes', (req, res) => {
        clientes.carregaClientes(req, res);
    })
}
