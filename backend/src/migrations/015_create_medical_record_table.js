const { DataTypes, Sequelize } = require('sequelize')

const {USER, PATIENT, MEDICAL_RECORD} = require("./table_name")

module.exports =  {
    up: async (queryInterface) => {
        await queryInterface.createTable(MEDICAL_RECORD, {
            medicalRecordId: {
                type: DataTypes.UUID,
                primaryKey: true,
            },

            name: {
                type: DataTypes.STRING(255),
                allowNull: false,
            },

            gender: {
                type: DataTypes.STRING(10),
                allowNull: false,
            },

            birthDay: {
                type: DataTypes.DATE,
                allowNull: false,
            },

            relationship: {
                type: DataTypes.STRING(30),
                allowNull: false,
            },

            phone: {
                type: DataTypes.STRING(11),
                allowNull: false,
            },

            address: {
                type: DataTypes.STRING(255),
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
                    model: PATIENT,
                    key: "patientId"
                },
                onUpdate: "CASCADE",
                onDelete: "CASCADE",
            },
        })
    },

    down: async (queryInterface) => {
        await queryInterface.dropTable(MEDICAL_RECORD);
    },
}
