const { DataTypes, Sequelize } = require('sequelize')

const {APPOINTMENT, USER, MEDICAL_RECORD, DEPARTMENT, TEST_PACKAGE} = require("./table_name")

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

            dateTime: {
                type: DataTypes.DATE,
                allowNull: false
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

            medicalRecordId: {
                type: DataTypes.UUID,
                allowNull: false,
                references: {
                    model: MEDICAL_RECORD,
                    key: "medicalRecordId"
                },
                onUpdate: "CASCADE",
                onDelete: "CASCADE",
            },

            departmentId: {
                type: DataTypes.UUID,
                allowNull: true,
                defaultValue: null,
                references: {
                    model: DEPARTMENT,
                    key: "departmentId",
                    
                },
                onUpdate: "SET NULL",
                onDelete: "SET NULL",
            },

            testPackageId: {
                type: DataTypes.UUID,
                allowNull: true,
                defaultValue: null,
                references: {
                    model: TEST_PACKAGE,
                    key: "testPackageId"
                },
                onUpdate: "SET NULL",
                onDelete: "SET NULL",
            },

        })
    },

    down: async (queryInterface) => {
        await queryInterface.dropTable(APPOINTMENT);
    },
}
