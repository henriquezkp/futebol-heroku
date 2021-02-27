'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('marcadores', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      partida_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'matchs',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      player: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'players',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      tempo:{
        type: Sequelize.INTEGER,
        allowNull: false
      }, 
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: true,
      }, });
  
  },

  down: async (queryInterface, Sequelize) => {
   await queryInterface.dropTable('marcadores');
   
  }
};
