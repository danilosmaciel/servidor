var express = require('express');
var faker = require('faker');
var bodyParser = require('body-parser');
var expressLayouts = require('express-ejs-layouts');
var app = express();
var port = 21015;
var host = "0.0.0.0";

// Definimos que vamos utilizar o ejs
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'))

// ROTAS
require('./app/route/cliente.route.js')(app);
require('./app/route/pedido.route.js')(app);
require('./app/route/produto.route.js')(app);
require('./app/route/outros.route.js')(app);
require('./app/route/cliente.route.js')(app);
require('./app/route/endereco.route.js')(app);
//

app.post('/contact', (req, res) => {
  res.send('Obrigado por entrar em contato conosco, ' + req.body.name + '! Responderemos em breve!')
})


app.listen(port,host,'', ()=>{
    console.log('Servidor iniciado em http://localhost:' + port)
});


function processaProdutos(res){
  Produto.findAll({ attributes: ["ID","NOME","DESCRICAO","VALOR","STATUS"]})
   .then( produtos =>{
     console.log("meu -> "+produtos);
       res.render('pages/produtos', { retorno: produtos});
   });
}