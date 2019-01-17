const { Cliente } = require('../models');

exports.processaLogin = function(req, res){
    console.log("chegou no login -> "+ req.body.email + " - " + req.body.senha);
    Cliente.findOne({ attributes: ["id","nome","email"], model: Cliente, where: {email:req.body.email, senha:req.body.senha}})
    .then( cliente =>{
        if(cliente){
            console.log('Achou reg: '+cliente);
           // let resposta= { id:req.email, status:'loginSucesso'};
           clienteRetorno = cliente.toJSON();
           clienteRetorno.status = 'loginSucesso';
           clienteRetorno.tolkienAcesso = 'aaaaaaaa';
            res.json(clienteRetorno);
        }else{
            console.log('Não achou reg!');
            let resposta= { id:req.email, status:'loginFalhou'};
            res.json(resposta);
        }
    }).error(erro => {
        
    });
    
}

exports.processaCadastro = function(req, res){

    console.log("cadastro veio -> "+ req.body.email + " - " + req.body.nome +" - " + req.body.senha);

    Cliente.findOne({
        attributes: ["email"],
        where: {
            email: req.body.email
        }
    }).then(elemento => {
        if(elemento){
            console.log("cadastro ja existe");
            let resposta= {id:elemento.email,status:'usuarioJaExiste'};
            res.json(resposta);
        }else{
            console.log("cadastro não existe");
            Cliente.create({
                nome:req.body.nome,
                email:req.body.email,
                senha:req.body.senha,
                telefonefixo:req.body.telefoneFixo,
                telefonecelular:req.body.telefonecelular
            }).then(clienteNovo =>{
                if(clienteNovo){
                    console.log("Cliente gravado com sucesso!\n"+clienteNovo);
                    let resposta= { email:clienteNovo.email, status:'cadastroSucesso'};
                    res.json(resposta);
                }else{
                    console.log("Falha ao gravar o registro!");
                    let resposta= {email:clienteNovo.email, status:'cadastroFalhou'};
                    res.json(resposta);
                }
                
            });
        }
       
    }).error(erro => {
        console.log("ERRO -> "+erro);
        res.json({status:'falhou'});
    });
    /*
    Cliente.findOne({
        attributes: ["email"],
        where: {
            email: req.body.email
        }
    }).then(elemento => {
        if(elemento){
            console.log("cadastro ja existe");
            let resposta= {id:elemento.id, email:elemento.email,status:'existente'};
            res.json(resposta);
        }
        console.log("cadastro não existe,criando um novo");
        Cliente.create({
            nome:req.nome,
            email:req.email,
            senha:req.senha
        }).then(clienteNovo =>{
            if(clienteNovo){
                console.log("Cliente gravado com sucesso!\n"+clienteNovo);
                let resposta= {id:elemento.id, email:elemento.email, status:'sucesso'};
                res.json(resposta);
            }
        });
       
    }).error(erro => {
        
    }) ;
    */
   
}

exports.carregaClientes = function(req, res){
    Cliente.findAll({ attributes: ["id","nome","email","telefonefixo","telefonecelular"], model: Cliente})
    .then( clientes =>{
       res.render('pages/clientes', { retorno: clientes});
    });
}

