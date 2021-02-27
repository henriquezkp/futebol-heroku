import {DataTypes} from 'sequelize';
import sequelize from '../../database/index';

const Player = sequelize.define(
    'players', {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
        name: {
          type: DataTypes.STRING(100),
          allowNull: false
        },
        position: {
          type: DataTypes.STRING(100),
          allowNull: false
        },
        altura: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        peso: {
          type: DataTypes.FLOAT,
          allowNull: false
        },
        data_nasc: {
          type: DataTypes.STRING(100),
          allowNull: false
        },
        time_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'times',
            key: 'id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
        created_at: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        updated_at: {
          type: DataTypes.DATE,
          allowNull: true,
        },
      }
)

export default Player;