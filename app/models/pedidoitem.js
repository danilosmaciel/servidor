module.exports = (sequelize, DataTypes) => {
    const PedidoItem = sequelize.define('PedidoItem', {
      numeropedido:  {type: DataTypes.INTEGER, allowNull: false, primaryKey: true, foreignKey: 'pedido' ,referencesKey: 'numeropedido'},
      codigoproduto: {type: DataTypes.INTEGER, allowNull: false, primaryKey: true, foreignKey: 'produto',referencesKey: 'id' },
      quantidade:    {type: DataTypes.INTEGER, allowNull: false},
    },
    {
      underscored: true,
      timestamps: false,
      classMethods: {
        associate: function (models) {
          {
            PedidoItem.hasOne(models.Produto, {
              foreignKey: {
                foreignKey: {
                  type: DataTypes.INTEGER,
                  field: 'id'
                }
              }
            }),
            models.PedidoItem.belongsTo(models.Pedido, {
              foreignKey: {
                type: DataTypes.INTEGER,
                field: 'id'
              }
            })
          }
        }
      }
    });
  /*
    PedidoItem.associate = function (models) {
      models.PedidoItem.hasOne(models.Produto, {
        foreignKey: {
          allowNull: false
        }
      });
    };

    PedidoItem.associate = function (models) {
      models.PedidoItem.belongsTo(models.Pedido, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  */
    return PedidoItem;
  }