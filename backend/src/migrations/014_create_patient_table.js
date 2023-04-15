const { DataTypes, Sequelize } = require('sequelize')

const {USER, DEPARTMENT, HOSPITAL, DOCTOR, PATIENT} = require("./table_name")

module.exports =  {
    up: async (queryInterface) => {
        await queryInterface.createTable(PATIENT, {
            patientId: {
                type: DataTypes.UUID,
                primaryKey: true,
            },

            created_at: {
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
        })
    },

    down: async (queryInterface) => {
        await queryInterface.dropTable(PATIENT);
    },
}
