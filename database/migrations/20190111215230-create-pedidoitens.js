module.exports = {
  up: (queryInterface, DataTypes) => {
    return Promise.resolve()
    .then(() => queryInterface.createTable('PedidoItens', {
      numeropedido: {
        allowNull: true,
        primaryKey: true,
        type: DataTypes.STRING(45),
        references: {
          model: 'Pedidos',
          key: 'numeropedido'
        }
      },
      codigoproduto: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Produtos',
          key: 'id'
        }
      },
      quantidade: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    }));
  },

  down: (queryInterface) => {
    queryInterface.dropTable('PedidoItens');
  }
};