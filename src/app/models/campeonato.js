import { DataTypes } from 'sequelize';
import sequelize from '../../database/index';

const Campeonatos = sequelize.define(
    'campeonatos', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
          },
          name: {
            type: DataTypes.STRING(100),
            allowNull: false,
          },
          data_inicio: {
            type: DataTypes.STRING(100),
            allowNull: false,
          },
          data_fim: {
            type: DataTypes.STRING(100),
            allowNull: false,
          }
})

export default Campeonatos;
