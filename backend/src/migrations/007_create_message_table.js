const { DataTypes } = require('sequelize')

const {MESSAGE, CHAT, USER} = require("./table_name")

module.exports =  {
    up: async (queryInterface) => {
        await queryInterface.createTable(MESSAGE, {
            message_id: {
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

            chat_id: {
                type: DataTypes.UUID,
                allowNull: false,
                references: {
                    model: CHAT,
                    key: "chat_id"
                },
                onUpdate: "CASCADE",
                onDelete: "CASCADE",
            },

            sender_id: {
                type: DataTypes.UUID,
                allowNull: false,
                references: {
                    model: USER,
                    key: "user_id"
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
