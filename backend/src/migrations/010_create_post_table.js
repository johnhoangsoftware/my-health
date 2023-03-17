const {DataTypes } = require('sequelize')

const {POST, USER} = require("./table_name")

module.exports =  {
    up: async (queryInterface) => {
        await queryInterface.createTable(POST, {
            post_id: {
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

            auth_id: {
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
        await queryInterface.dropTable(POST);
    },
}
