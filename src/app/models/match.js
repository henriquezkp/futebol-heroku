import { DataTypes } from 'sequelize';
import sequelize from '../../database/index';

const Matchs = sequelize.define(
    'matchs', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
          },
          time_casa: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: 'times',
              key: 'id'
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
          },
          time_visitante: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: 'times',
              key: 'id'
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
          },
          placar_time_casa: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          placar_time_visitante: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          campeonato_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: 'campeonato',
              key: 'id'
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
          },
          data_jogo:{
            type: DataTypes.STRING(20),
            allowNull: false
          }, 
          created_at: {
            type: DataTypes.DATE,
            allowNull: false,
          },
          updated_at: {
            type: DataTypes.DATE,
            allowNull: true,
          },
})

export default Matchs;
