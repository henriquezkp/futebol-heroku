import { DataTypes } from 'sequelize';
import sequelize from '../../database/index';

const Marcador = sequelize.define('marcadores', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    partida_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'matchs',
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
    },
    player: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'players',
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
    },
    tempo: {
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
})

export default Marcador;