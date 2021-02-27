'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('campeonato-times', {
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
      campeonato_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'campeonatos',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('campeonato-times');
  }
};
