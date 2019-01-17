module.exports = (sequelize, DataTypes) => {
    const Pedido = sequelize.define('Pedido', {
      numeropedido: {type: DataTypes.INTEGER, allowNull: false, primaryKey: true},
      datapedido:   {type: DataTypes.DATE,    allowNull: false, defaultValue: DataTypes.NOW},
      dataentrega:  {type: DataTypes.DATE,    allowNull: false, defaultValue: DataTypes.NOW},
      clienteId:    {type: DataTypes.STRING,  allowNull: false, foreignKey: 'cliente',referencesKey: 'id'},
      enderecoId:   {type: DataTypes.INTEGER, allowNull: true, foreignKey: 'endereco',referencesKey: 'id'},
      statuspedido: {type: DataTypes.STRING,  allowNull: false}
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
    Pedido.associate = function (models) {
      models.Pedido.hasMany(models.PedidoItem, {
        onDelete: "CASCADE",
        foreignKey: {
          allowNull: false
        }
      });
    };

    Pedido.associate = function (models) {
      models.Pedido.hasOne(models.Cliente, {
        onDelete: "CASCADE",
        foreignKey: {
          allowNull: false
        }
      });
    };
    */
    return Pedido;
  }
