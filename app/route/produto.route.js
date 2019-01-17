module.exports = function (app) {

    const produtos = require('../controller/produto.controller');

    app.get('/produtos', (req, res) => {
        produtos.processaProdutos(res);
    });

    app.get('/produtoscadastro', (req, res) => {
        res.render('pages/cadastroprodutos');
    });

    app.post('/produtoscadastro', (req, res) => {
        produtos.cadastraProdutos(req,res);
    });

    app.get('/produtos/json', (req, res) => {
        console.log("Chegou na rota dos produtos....");
        produtos.carregaProdutosJson(req,res);
    });
}
