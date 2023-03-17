const { DataTypes } = require('sequelize')

const {HOSPITAL} = require("./table_name")

module.exports =  {
    up: async (queryInterface) => {
        await queryInterface.createTable(HOSPITAL, {
            hospital_id: {
                type: DataTypes.UUID,
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },

            address: {
                type: DataTypes.STRING,
                allowNull: false
            },

            created_at: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: DataTypes.NOW,
            },
            updated_at: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: DataTypes.NOW,
            },
        })
    },

    down: async (queryInterface) => {
        await queryInterface.dropTable(HOSPITAL);
    },
}