import { Sequelize } from 'sequelize';
import config from '../config/database';

const sequelize = new Sequelize(
    config.url,
    config
);

export default sequelize;