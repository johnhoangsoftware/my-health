const { DataTypes, Sequelize } = require('sequelize')

const {MESSAGE, CHAT, USER} = require("./table_name")

module.exports =  {
    up: async (queryInterface) => {
        await queryInterface.createTable(MESSAGE, {
            messageId: {
                type: DataTypes.UUID,
                primaryKey: true,
            },

            content: {
                type: DataTypes.STRING(100),
                allowNull: false,
            },

            type: {
                type: DataTypes.STRING(10),
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

            chatId: {
                type: DataTypes.UUID,
                allowNull: false,
                references: {
                    model: CHAT,
                    key: "chatId"
                },
                onUpdate: "CASCADE",
                onDelete: "CASCADE",
            },

            senderId: {
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
        await queryInterface.dropTable(MESSAGE);
    },
}
