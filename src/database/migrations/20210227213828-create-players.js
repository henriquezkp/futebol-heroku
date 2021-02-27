'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('players', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      position: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      altura: {
        type: Sequelize.FLOAT(2),
        allowNull: false
      },
      peso: {
        type: Sequelize.FLOAT(2),
        allowNull: false
      },
      data_nasc: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      time_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'times',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: true,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('players');
  }
};
