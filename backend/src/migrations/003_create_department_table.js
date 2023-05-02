const { DataTypes, Sequelize } = require('sequelize')

const {DEPARTMENT, HOSPITAL} = require("./table_name")

module.exports =  {
    up: async (queryInterface) => {
        await queryInterface.createTable(DEPARTMENT, {
            departmentId: {
                type: DataTypes.UUID,
                primaryKey: true,
            },

            name: {
                type: DataTypes.STRING(255),
                allowNull: false,
            },

            avatar: {
                type: DataTypes.STRING(255),
                defaultValue: null
            },

            createdAt: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: Sequelize.fn('now'),
            },

            updatedAt: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: Sequelize.fn('now'),
            },

            hospitalId: {
                type: DataTypes.UUID,
                allowNull: false,
                references: {
                    model: HOSPITAL,
                    key: "hospitalId"
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
            },
        })
    },

    down: async (queryInterface) => {
        await queryInterface.dropTable(DEPARTMENT);
    },
}
