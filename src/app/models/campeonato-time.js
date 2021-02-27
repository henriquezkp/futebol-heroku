import { DataTypes } from 'sequelize';
import sequelize from '../../database/index';

const CampeonatoTime = sequelize.define(
    'campeonato-times', {
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
        campeonato_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'campeonatos',
            key: 'id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
      })

export default CampeonatoTime;
