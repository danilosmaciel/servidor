module.exports = (sequelize, DataTypes) => {
    const Endereco = sequelize.define('Endereco', {
      id:        {type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: false},
      logradouro:{type: DataTypes.STRING,  allowNull: false},
      numero:    {type: DataTypes.STRING,  allowNull: false},
      bairro:    {type: DataTypes.STRING,  allowNull: false},
      cidade:    {type: DataTypes.STRING,  allowNull: false},
      clienteId: {type: DataTypes.INTEGER} 
    },{
      underscored: true,
      timestamps: false,
      classMethods: {
          associate: function(models) {
            Endereco.belongsTo(models.Cliente, {
              foreignKey: {
                type: DataTypes.INTEGER,
		            field: 'id'
              }
            });
          }
      }
    });
/*
    Endereco.associate = function (models) {
        models.Endereco.belongsTo(models.Cliente, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        });
      };
  */
    return Endereco;
  };

  