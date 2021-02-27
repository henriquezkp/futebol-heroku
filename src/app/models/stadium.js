import { DataTypes } from 'sequelize';
import sequelize from '../../database/index';

const Stadium = sequelize.define(
    'stadiums', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    capacity: {
        type: DataTypes.INTEGER,
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
})

export default Stadium;
