import { Sequelize, DataTypes} from 'sequelize';

const sequelize = new Sequelize(
    'charactersystem',
    'root',
    'password',
    {
        host: 'localhost',
        dialect: 'mysql'
    }
);

sequelize.authenticate().then(() => {
    console.log("Connection has been established successfully");
}).catch((err) => {
    console.error("Unable to connect to the database: ", err);
})

const CharacterInfo = sequelize.define('characters', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    characterName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

sequelize.sync().then(() => {
    console.log("User table created successfully");
}).catch((err) => {
    console.log("Unable to create table: ", err);
})

export default CharacterInfo;