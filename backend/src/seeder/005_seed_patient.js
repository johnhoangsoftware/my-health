const { PATIENT } = require('../migrations/table_name');

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(PATIENT, [
            {
                patientId: 'f22a934a-3855-4799-bfed-7499be8d1b53',
                userId: '2d683fbb-39aa-4428-8b44-c09394f8641d'
            }
        ]);
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete(PATIENT, null, {});
    }
};