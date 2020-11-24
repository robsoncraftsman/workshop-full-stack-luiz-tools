import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('mysql://user:password@localhost:3306/WKFS');

export default sequelize;
