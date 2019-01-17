module.exports = (sequelize, DataTypes) => {
    const Produto = sequelize.define('Produto', {
      id:        {type: DataTypes.INTEGER, allowNull: false, primaryKey: true,autoIncrement: true},
      nome:      {type: DataTypes.STRING, allowNull: false},
      descricao: {type: DataTypes.STRING, allowNull: false},
      valor:     {type: DataTypes.REAL, allowNull: false},
      status:    {type: DataTypes.STRING, allowNull: false},
    },
    {
      underscored: true,
      timestamps: false,
      classMethods: {
        associate: function (models) {
          {
            models.Pedido.belongsToMany(models.PedidoItem)
          }
        },
      }
    });
    /*
    Produto.associate = function(models) {
      this.hasMany(models.PedidoItem);
    };
     */
    
    return Produto;
  }
