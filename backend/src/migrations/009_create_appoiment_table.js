const { DataTypes, Sequelize } = require('sequelize')

const {APPOINTMENT, USER, SERVICE} = require("./table_name")

module.exports =  {
    up: async (queryInterface) => {
        await queryInterface.createTable(APPOINTMENT, {
            appointmentId: {
                type: DataTypes.UUID,
                primaryKey: true,
            },

            status: {
                type: DataTypes.STRING(20),
                allowNull: false,
            },

            time: {
                type: DataTypes.DATE,
                defaultValue: Sequelize.fn('now')
            },

            description: {
                type: DataTypes.TEXT,
                allowNull: false,
            },

            address: {
                type: DataTypes.STRING,
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

            patientId: {
                type: DataTypes.UUID,
                allowNull: false,
                references: {
                    model: USER,
                    key: "userId"
                },
                onUpdate: "CASCADE",
                onDelete: "CASCADE",
            },

            doctorId: {
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
        await queryInterface.dropTable(APPOINTMENT);
    },
}
