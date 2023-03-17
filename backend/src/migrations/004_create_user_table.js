const { DataTypes } = require('sequelize')

const {USER, DEPARTMENT} = require("./table_name")

module.exports =  {
    up: async (queryInterface) => {
        await queryInterface.createTable(USER, {
            user_id: {
                type: DataTypes.UUID,
                primaryKey: true,
            },

            email: {
                type: DataTypes.STRING(100),
                allowNull: false,
                unique: true
            },

            password: {
                type: DataTypes.STRING(100),
                allowNull: false,
            },

            firstName: {
                type: DataTypes.STRING(30),
                allowNull: false,
            },

            lastName: {
                type: DataTypes.STRING(30),
                allowNull: false,
            },

            birthDay: {
                type: DataTypes.DATE,
                allowNull: false,
            },

            avatar: {
                type: DataTypes.STRING(100),
                allowNull: false,
            },

            phone: {
                type: DataTypes.STRING(10),
                allowNull: false,
            },

            role: {
                type: DataTypes.ENUM("PATIENT", "DOCTOR", "ADMIN"),
                allowNull: false,
                defaultValue: "PATIENT"
            },

            address: {
                type: DataTypes.STRING,
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

            department_id: {
                type: DataTypes.UUID,
                allowNull: false,
                references: {
                    model: DEPARTMENT,
                    key: "department_id"
                },
                onUpdate: "CASCADE",
                onDelete: "CASCADE",
            },
        })
    },

    down: async (queryInterface) => {
        await queryInterface.dropTable(USER);
    },
}
