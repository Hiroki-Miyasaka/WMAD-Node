import sequelize from "./sequelize";
import { DataType } from "sequelize";

const User = sequelize.define('users', {
    id: {
        type: DataType.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    username: {
        type: DataType.INTEGER,
        allowNull: false
    },
    email: {
        type: DataType.INTEGER,
        allowNull: false
    },
    password: {
        type: DataType.INTEGER,
        allowNull: false
    }
});

sequelize.sync().then(() => {
    console.log('User table created successfully');
}).catch((err) => {
    console.log('Unable to create table: ', err);
})

export default User;