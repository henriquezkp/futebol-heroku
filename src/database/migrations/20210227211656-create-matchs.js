'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('matchs', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      time_casa: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'times',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      time_visitante: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'times',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      placar_time_casa: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      placar_time_visitante: {
        type: Sequelize.INTEGER,
        allowNull: false,
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
      data_jogo:{
        type: Sequelize.STRING(20),
        allowNull: false
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
    await queryInterface.dropTable('matchs');
  }

};
