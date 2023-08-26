const { DataTypes } = require("Sequelize");

module.exports = (Sequelize) => {
    const Genre = Sequelize.define("Genre", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    });

    return Genre;
};
