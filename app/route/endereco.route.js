module.exports = function (app) {

    const enderecos = require('../controller/endereco.controller.js');

    app.post('/endereco/cadastro', (req, res) => {
        console.log(" chegou endereço....");
        enderecos.processaEnderco(req, res);
    });
 
}
