const { DEPARTMENT_DETAIL } = require('../migrations/table_name');

module.exports = {
  up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(DEPARTMENT_DETAIL, [
            { department_detail_id: "6c6e0cf7-084a-497e-9f47-30ac5ed93401", name: "Khoa Nhi" },
            { department_detail_id: "0fa142b3-d580-475f-95b4-9375fddb4a8b", name: "Khoa ngoại tổng quát" },
            { department_detail_id: "3ce80c11-9b18-4a4f-9784-1aca9c96200b", name: "Khoa thần kinh" },
            { department_detail_id: "a0d26a52-8fd6-4dfa-aee2-e4650cece265", name: "Khoa mắt" },
            { department_detail_id: "5f25d519-de54-4b16-8778-62dde348b5d1", name: "Khoa nội tổng quát" },
            { department_detail_id: "3c79d3c7-d8c1-4a5c-aa78-131b451f49c1", name: "Khoa thẩm mỹ" },
            { department_detail_id: "b94e363a-aa89-4be9-afcb-7cc80c58134f", name: "Khoa vật lý trị liệu" },
            { department_detail_id: "d98ee3b7-ac18-46a6-9c43-853f901ee85b", name: "Khoa sản" },
            { department_detail_id: "ff178ddb-c6ef-4025-a4f5-e9a5a9b2b67e", name: "Khoa tai mũi họng" },
            { department_detail_id: "9be0338e-154e-4f79-ae65-65fbca76f3f2", name: "Hóa răng hàm mặt" },
            { department_detail_id: "8ed53b76-22d1-4526-b38e-d72690bc8dac", name: "Khoa dược" },
            { department_detail_id: "a42276bd-db63-4124-8cab-07c952f669d5", name: "Khoa cấp cứu" },
            { department_detail_id: "d5c55e41-c785-4eb2-898e-5a66860d4bb6", name: "Khoa da liễu" },
            { department_detail_id: "cd0d304a-bb0b-44f1-8121-3d38fa87c2ed", name: "Khoa tâm lý" },
        ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(DEPARTMENT_DETAIL, null, {});
  }
};