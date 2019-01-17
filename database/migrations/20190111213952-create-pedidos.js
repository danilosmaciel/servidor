module.exports = {
  up: (queryInterface, DataTypes) => {
    return Promise.resolve()
    .then(() => queryInterface.createTable('Pedidos', {
      numeropedido: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: DataTypes.STRING(45),
      },
      datapedido: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      },
      dataentrega: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      },
      statuspedido: {
        allowNull: false,
        type: DataTypes.STRING(45),
      },
      clienteId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Clientes',
          key: 'id'
        }
      },
      enderecoId: {
        allowNull: true,
        type: DataTypes.INTEGER,
        references: {
          model: 'Enderecos',
          key: 'id'
        }
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
    queryInterface.dropTable('Pedidos');
  }
};