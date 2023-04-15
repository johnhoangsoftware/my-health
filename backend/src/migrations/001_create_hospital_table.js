const { DataTypes, Sequelize } = require('sequelize')

const {HOSPITAL} = require("./table_name")

module.exports =  {
    up: async (queryInterface) => {
        await queryInterface.createTable(HOSPITAL, {
            hospitalId: {
                type: DataTypes.UUID,
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },

            description: {
                type: DataTypes.TEXT,
                allowNull: true
            },

            address: {
                type: DataTypes.STRING,
                allowNull: false
            },

            avatar: {
                type: DataTypes.STRING,
                allowNull: true
            },

            created_at: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: Sequelize.fn('now'),
            },
        })
    },

    down: async (queryInterface) => {
        await queryInterface.dropTable(HOSPITAL);
    },
}