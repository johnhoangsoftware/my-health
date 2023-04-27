const { DataTypes, Sequelize } = require('sequelize')

const {COMMENT, POST, USER} = require("./table_name")

module.exports =  {
    up: async (queryInterface) => {
        await queryInterface.createTable(COMMENT, {
            commentId: {
                type: DataTypes.UUID,
                primaryKey: true,
            },

            content: {
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

            postId: {
                type: DataTypes.UUID,
                allowNull: false,
                references: {
                    model: POST,
                    key: "postId"
                },
                onUpdate: "CASCADE",
                onDelete: "CASCADE",
            },
        })
    },

    down: async (queryInterface) => {
        await queryInterface.dropTable(COMMENT);
    },
}
