module.exports = {
  up: (queryInterface, DataTypes) => {
    return Promise.resolve()
    .then(() => queryInterface.createTable('Produtos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      nome: {
        allowNull: false,
        type: DataTypes.STRING(45),
        unique: true,
      },
      descricao: {
        allowNull: false,
        type: DataTypes.STRING(45),
      },
      valor: {
        allowNull: false,
        type: DataTypes.REAL,
      },
      status: {
        allowNull: false,
        type: DataTypes.STRING(45),
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
    queryInterface.dropTable('Produtos');
  }
};