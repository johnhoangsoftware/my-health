const { DataTypes } = require('sequelize')

const {REACTION, COMMENT, USER} = require("./table_name")

module.exports =  {
    up: async (queryInterface) => {
        await queryInterface.createTable(REACTION, {
            reaction_id: {
                type: DataTypes.UUID,
                primaryKey: true,
            },

            created_at: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: DataTypes.NOW,
            },

            user_id: {
                type: DataTypes.UUID,
                allowNull: false,
                references: {
                    model: USER,
                    key: "user_id"
                },
                onUpdate: "CASCADE",
                onDelete: "CASCADE",
            },

            comment_id: {
                type: DataTypes.UUID,
                allowNull: false,
                references: {
                    model: COMMENT,
                    key: "comment_id"
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
