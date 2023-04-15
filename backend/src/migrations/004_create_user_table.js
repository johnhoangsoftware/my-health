const { DataTypes, Sequelize } = require('sequelize')

const {USER, DEPARTMENT} = require("./table_name")

module.exports =  {
    up: async (queryInterface) => {
        await queryInterface.createTable(USER, {
            userId: {
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
                defaultValue: Sequelize.fn('now'),
            },
            updated_at: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: Sequelize.fn('now'),
            },

            departmentId: {
                type: DataTypes.UUID,
                allowNull: false,
                references: {
                    model: DEPARTMENT,
                    key: "departmentId"
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
