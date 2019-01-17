module.exports = (sequelize, DataTypes) => {
    const Cliente = sequelize.define('Cliente', {
      id:    {type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true},
      nome:  {type: DataTypes.STRING,  allowNull: false},
      email: {type: DataTypes.STRING,  allowNull: false},
      senha: {type: DataTypes.STRING,  allowNull: false},
      telefonefixo: {type: DataTypes.STRING,  allowNull: true},
      telefonecelular: {type: DataTypes.STRING,  allowNull: true}
    },
    {
     underscored: true,
     timestamps: false,
     classMethods: {
         associate: function(models) {
           Cliente.hasMany(models.Endereco);
           Cliente.hasMany(models.Pedido)
         }
     }
   });
  
    /*
    Cliente.associate = function(models) {
      models.Cliente.hasMany(models.Endereco);
    };

    Cliente.associate = function(models) {
      models.Cliente.hasMany(models.Pedido);
    };
    */
    return Cliente;
  }
