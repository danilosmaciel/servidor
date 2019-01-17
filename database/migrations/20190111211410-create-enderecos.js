module.exports = {
  up: (queryInterface, DataTypes) => {
    return Promise.resolve()
    .then(() => queryInterface.createTable('Enderecos', {
      id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      logradouro: {
        allowNull: false,
        type: DataTypes.STRING(45),
      },
      numero: {
        allowNull: false,
        type: DataTypes.STRING(45),
      },
      bairro: {
        allowNull: false,
        type: DataTypes.STRING(45),
      },
      cidade: {
        allowNull: false,
        type: DataTypes.STRING(45),
      },
      clienteId: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER,
        references: {
          model: 'Clientes',
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
    queryInterface.dropTable('Enderecos');
  }
};
