const { DataTypes, Sequelize } = require('sequelize')

const {REACTION, COMMENT, USER} = require("./table_name")

module.exports =  {
    up: async (queryInterface) => {
        await queryInterface.createTable(REACTION, {
            reactionId: {
                type: DataTypes.UUID,
                primaryKey: true,
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

            userId: {
                type: DataTypes.UUID,
                allowNull: false,
                references: {
                    model: USER,
                    key: "userId"
                },
                onUpdate: "CASCADE",
                onDelete: "CASCADE",
            },

            commentId: {
                type: DataTypes.UUID,
                allowNull: false,
                references: {
                    model: COMMENT,
                    key: "commentId"
                },
                onUpdate: "CASCADE",
                onDelete: "CASCADE",
            },
        })
    },

    down: async (queryInterface) => {
        await queryInterface.dropTable(REACTION);
    },
}
