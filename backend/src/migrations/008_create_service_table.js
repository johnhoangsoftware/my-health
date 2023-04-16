const {DataTypes,Sequelize } = require('sequelize')

const {SERVICE, HOSPITAL} = require("./table_name")

module.exports =  {
    up: async (queryInterface) => {
        await queryInterface.createTable(SERVICE, {
            serviceId: {
                type: DataTypes.UUID,
                primaryKey: true,
            },

            name: {
                type: DataTypes.STRING(100),
                allowNull: false,
            },

            price: {
                type: DataTypes.DOUBLE,
                defaultValue: 0
            },

            description: {
                type: DataTypes.TEXT,
                allowNull: false,
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
                onUpdate: "CASCADE",
                onDelete: "CASCADE",
            },
        })
    },

    down: async (queryInterface) => {
        await queryInterface.dropTable(SERVICE);
    },
}
