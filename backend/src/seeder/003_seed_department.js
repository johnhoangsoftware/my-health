const { DEPARTMENT } = require('../migrations/table_name');

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(DEPARTMENT, [
            { department_id: "d31be3b7-c6b1-464e-9c6f-849e9c769e9b", department_detail_id: "6c6e0cf7-084a-497e-9f47-30ac5ed93401", hospital_id: "f7fdfaf0-7f60-44b6-8d37-69c47c2c21cd" },
            { department_id: "72080ecb-3f58-4f0f-a3c2-43d9d4a1e3e6", department_detail_id: "0fa142b3-d580-475f-95b4-9375fddb4a8b", hospital_id: "f7fdfaf0-7f60-44b6-8d37-69c47c2c21cd" },
            { department_id: "0dedab23-12e9-471e-af92-60ed78e9f3b5", department_detail_id: "a0d26a52-8fd6-4dfa-aee2-e4650cece265", hospital_id: "f7fdfaf0-7f60-44b6-8d37-69c47c2c21cd" },
            { department_id: "3e3d1f5b-666d-4120-8069-59c7abbcc3c6", department_detail_id: "5f25d519-de54-4b16-8778-62dde348b5d1", hospital_id: "f7fdfaf0-7f60-44b6-8d37-69c47c2c21cd" },
            { department_id: "66a7edeb-a020-43a5-9953-69c8209714a0", department_detail_id: "b94e363a-aa89-4be9-afcb-7cc80c58134f", hospital_id: "f7fdfaf0-7f60-44b6-8d37-69c47c2c21cd" },
            { department_id: "9e7eebf4-ac33-47b9-a613-099087aa0279", department_detail_id: "d98ee3b7-ac18-46a6-9c43-853f901ee85b", hospital_id: "f7fdfaf0-7f60-44b6-8d37-69c47c2c21cd" },
            { department_id: "cbabd691-5258-4fa4-9625-c4510c0109f3", department_detail_id: "6c6e0cf7-084a-497e-9f47-30ac5ed93401", hospital_id: "8e8e67e0-b971-4efc-b563-587d6e5675d3" },
            { department_id: "ba3a784e-c9db-4564-a496-247af63061a0", department_detail_id: "0fa142b3-d580-475f-95b4-9375fddb4a8b", hospital_id: "8e8e67e0-b971-4efc-b563-587d6e5675d3" },
            { department_id: "0cb22f58-a07b-4ffb-89f2-f1a263463240", department_detail_id: "a0d26a52-8fd6-4dfa-aee2-e4650cece265", hospital_id: "8e8e67e0-b971-4efc-b563-587d6e5675d3" },
            { department_id: "f9d1efb6-1f0a-40ca-8a64-33b339a7b977", department_detail_id: "5f25d519-de54-4b16-8778-62dde348b5d1", hospital_id: "8e8e67e0-b971-4efc-b563-587d6e5675d3" },
            { department_id: "eebddf9c-b909-4ea1-a23c-1c4e0b614b8d", department_detail_id: "d98ee3b7-ac18-46a6-9c43-853f901ee85b", hospital_id: "8e8e67e0-b971-4efc-b563-587d6e5675d3" },
            { department_id: "e29a2249-f701-4352-a2ec-b3e638dca4e7", department_detail_id: "6c6e0cf7-084a-497e-9f47-30ac5ed93401", hospital_id: "cca2c6dc-f9dc-4560-ab75-154fcfeb529c" },
            { department_id: "17c8afe8-13f2-46f6-a4e2-c8da2ecbcf6c", department_detail_id: "a0d26a52-8fd6-4dfa-aee2-e4650cece265", hospital_id: "cca2c6dc-f9dc-4560-ab75-154fcfeb529c" },
            { department_id: "0474e06f-9a9c-498f-aec6-384061b4b662", department_detail_id: "5f25d519-de54-4b16-8778-62dde348b5d1", hospital_id: "cca2c6dc-f9dc-4560-ab75-154fcfeb529c" },
            { department_id: "fa548964-8b2a-414e-8167-0c24729a8d19", department_detail_id: "6c6e0cf7-084a-497e-9f47-30ac5ed93401", hospital_id: "4ef9c725-d451-473a-b9bd-b0b6e05db155" },
            { department_id: "b28991c6-d4b0-4ad8-a59d-6e473a0e2d26", department_detail_id: "a0d26a52-8fd6-4dfa-aee2-e4650cece265", hospital_id: "4ef9c725-d451-473a-b9bd-b0b6e05db155" },
            { department_id: "01b63441-075e-46d5-9798-21582c36ecf2", department_detail_id: "3c79d3c7-d8c1-4a5c-aa78-131b451f49c1", hospital_id: "4ef9c725-d451-473a-b9bd-b0b6e05db155" },
            { department_id: "308dbbdb-548d-4d28-bdbc-e9842b912d3c", department_detail_id: "b94e363a-aa89-4be9-afcb-7cc80c58134f", hospital_id: "4ef9c725-d451-473a-b9bd-b0b6e05db155" },
            { department_id: "7e05fa46-5077-4ed5-a7ed-ab134d774253", department_detail_id: "d98ee3b7-ac18-46a6-9c43-853f901ee85b", hospital_id: "4fab9aca-acd3-4956-8e83-cabf6213559f" },
            { department_id: "4e027973-33b1-4ad2-a9c3-a2883074b2d2", department_detail_id: "ff178ddb-c6ef-4025-a4f5-e9a5a9b2b67e", hospital_id: "4fab9aca-acd3-4956-8e83-cabf6213559f" },
            { department_id: "5e4ef77b-6397-478c-813c-982d131730b9", department_detail_id: "3ce80c11-9b18-4a4f-9784-1aca9c96200b", hospital_id: "4fab9aca-acd3-4956-8e83-cabf6213559f" },
            { department_id: "04502564-2a7d-456e-8b20-42e180b9053e", department_detail_id: "6c6e0cf7-084a-497e-9f47-30ac5ed93401", hospital_id: "35dd30c7-41f0-436d-8c3e-56089d2d03f1" },
            { department_id: "6dedf6d2-368a-46b5-92da-12ca93ae72b4", department_detail_id: "a0d26a52-8fd6-4dfa-aee2-e4650cece265", hospital_id: "35dd30c7-41f0-436d-8c3e-56089d2d03f1" },
            { department_id: "cf2d7726-8566-4939-85bf-998f45f370e1", department_detail_id: "3c79d3c7-d8c1-4a5c-aa78-131b451f49c1", hospital_id: "35dd30c7-41f0-436d-8c3e-56089d2d03f1" },
            { department_id: "2cdacb05-d377-41ed-b999-d1afc9d15e8f", department_detail_id: "0fa142b3-d580-475f-95b4-9375fddb4a8b", hospital_id: "35dd30c7-41f0-436d-8c3e-56089d2d03f1" }
        ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(DEPARTMENT, null, {});
  }
};