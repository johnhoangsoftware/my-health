const { HOSPITAL } = require('../migrations/table_name');

module.exports = {
  up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(HOSPITAL, [
            {hospital_id: "f7fdfaf0-7f60-44b6-8d37-69c47c2c21cd", name: "Bệnh viện Hồng Đức 2", address: "Thành phố Hồ Chí Minh"},
            {hospital_id: "8e8e67e0-b971-4efc-b563-587d6e5675d3", name: "Bệnh viện Hồng Đức 3", address: "Thành phố Hồ Chí Minh"},
            {hospital_id: "cca2c6dc-f9dc-4560-ab75-154fcfeb529c", name: "Phòng khám Bệnh Viện Quốc Tế Dr.Khoa", address: "Thành phố Hồ Chí Minh"},
            {hospital_id: "4ef9c725-d451-473a-b9bd-b0b6e05db155", name: "Bệnh viện phụ sản Hà Nội", address: "Thành phố Hà Nội"},
            {hospital_id: "4fab9aca-acd3-4956-8e83-cabf6213559f", name: "Bệnh viện Quân Y 354", address: "Thành phố Hà Nội"},
            {hospital_id: "35dd30c7-41f0-436d-8c3e-56089d2d03f1", name: "Bệnh viện Bình Dân Đà Nẵng", address: "Đà Nẵng"},
        ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(HOSPITAL, null, {});
  }
};