const { DataTypes, Sequelize } = require('sequelize')

const {DEPARTMENT, DEPARTMENT_DETAIL, HOSPITAL} = require("./table_name")

module.exports =  {
    up: async (queryInterface) => {
        await queryInterface.createTable(DEPARTMENT, {
            department_id: {
                type: DataTypes.UUID,
                primaryKey: true,
            },
            department_detail_id: {
                type: DataTypes.UUID,
                allowNull: false,
                references: {
                    model: DEPARTMENT_DETAIL,
                    key: "department_detail_id"
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
            },

            hospital_id: {
                type: DataTypes.UUID,
                allowNull: false,
                references: {
                    model: HOSPITAL,
                    key: "hospital_id"
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
            },
        })
    },

    down: async (queryInterface) => {
        await queryInterface.dropTable(DEPARTMENT);
    },
}
