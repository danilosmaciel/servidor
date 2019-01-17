module.exports = function (app) {
app.get('/', (req, res) => {
    res.render('pages/home');
  });
  
  app.get('/teste', (req, res) => {
      let nome = {nome:'Pedro', idade: 21};
    res.json(nome);
  });

  app.post('/contact', (req, res) => {
    res.send('Obrigado por entrar em contato conosco, ' + req.body.name + '! Responderemos em breve!')
  })
  
}