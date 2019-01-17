module.exports = {
  up: (queryInterface, DataTypes) => {
    return Promise.resolve()
    .then(() => queryInterface.createTable('Clientes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      nome: {
        allowNull: false,
        type: DataTypes.STRING(45),
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING(45),
        unique: true,
      },
      senha: {
        allowNull: false,
        type: DataTypes.STRING(45),
      },
      telefonefixo: {
        allowNull: true,
        type: DataTypes.STRING(45),
      },
      telefonecelular: {
        allowNull: true,
        type: DataTypes.STRING(45),
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      },
    }));
  },

  down: (queryInterface) => {
    queryInterface.dropTable('Clientes');
  }
};