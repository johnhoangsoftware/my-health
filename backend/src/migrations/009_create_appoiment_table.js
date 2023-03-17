const { DataTypes } = require('sequelize')

const {APPOINTMENT, USER, SERVICE} = require("./table_name")

module.exports =  {
    up: async (queryInterface) => {
        await queryInterface.createTable(APPOINTMENT, {
            appointment_id: {
                type: DataTypes.UUID,
                primaryKey: true,
            },

            status: {
                type: DataTypes.STRING(20),
                allowNull: false,
            },

            time: {
                type: DataTypes.DATE,
                defaultValue: DataTypes.NOW
            },

            description: {
                type: DataTypes.TEXT,
                allowNull: false,
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

            patient_id: {
                type: DataTypes.UUID,
                allowNull: false,
                references: {
                    model: USER,
                    key: "user_id"
                },
                onUpdate: "CASCADE",
                onDelete: "CASCADE",
            },

            doctor_id: {
                type: DataTypes.UUID,
                allowNull: false,
                references: {
                    model: USER,
                    key: "user_id"
                },
                onUpdate: "CASCADE",
                onDelete: "CASCADE",
            },

            service_id: {
                type: DataTypes.UUID,
                allowNull: false,
                references: {
                    model: SERVICE,
                    key: "service_id"
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
