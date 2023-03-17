const { DataTypes } = require('sequelize')

const {DEPARTMENT_DETAIL} = require("./table_name")

module.exports =  {
    up: async (queryInterface) => {
        await queryInterface.createTable(DEPARTMENT_DETAIL, {
            department_detail_id: {
                type: DataTypes.UUID,
                primaryKey: true,
            },
            name: {
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
        await queryInterface.dropTable(DEPARTMENT_DETAIL);
    },
}