import {DataTypes} from 'sequelize';
import sequelize from '../../database/index';

const Time = sequelize.define(
    'times', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
          },
          name: {
            type: DataTypes.STRING(100),
            allowNull: false
          },
          city: {
            type: DataTypes.STRING(100),
            allowNull: false
          },
          state: {
            type: DataTypes.STRING(2),
            allowNull: false
          },
          fundation: {
            type: DataTypes.INTEGER,
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
    }
)

export default Time;