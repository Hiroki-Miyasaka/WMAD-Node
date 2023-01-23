import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize(
    'loginsystem',
    'root',
    'password',
    {
        host: 'localhost',
        dialect: 'mysql'
    }
);

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully');
}).catch((err) => {
    console.err('Unable to connect to the database:', err);
})

const User = sequelize.define('users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

sequelize.sync().then(() => {
    console.log('User table created successfully');
}).catch((err) => {
    console.log('Unable to create table:', err);
})

export default User;