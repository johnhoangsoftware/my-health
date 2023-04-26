const {DataTypes,Sequelize } = require('sequelize')

const {POST, USER} = require("./table_name")

module.exports =  {
    up: async (queryInterface) => {
        await queryInterface.createTable(POST, {
            postId: {
                type: DataTypes.UUID,
                primaryKey: true,
            },

            topic: {
                type: DataTypes.STRING(30),
                allowNull: false,
            },

            content: {
                type: DataTypes.TEXT,
                allowNull: false,
            },

            media: {
                type: DataTypes.TEXT,
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

            authId: {
                type: DataTypes.UUID,
                allowNull: false,
                references: {
                    model: USER,
                    key: "userId"
                },
                onUpdate: "CASCADE",
                onDelete: "CASCADE",
            },
        })
    },

    down: async (queryInterface) => {
        await queryInterface.dropTable(POST);
    },
}
