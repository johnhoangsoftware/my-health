const { DEPARTMENT } = require('../migrations/table_name');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(DEPARTMENT, [
      {
        departmentId: "6c6e0cf7-084a-497e-9f47-30ac5ed93401",
        name: "Khoa Nhi",
        hospitalId: "f7fdfaf0-7f60-44b6-8d37-69c47c2c21cd"

      },
      {
        departmentId: "0fa142b3-d580-475f-95b4-9375fddb4a8b",
        name: "Khoa ngoại tổng quát",
        hospitalId: "f7fdfaf0-7f60-44b6-8d37-69c47c2c21cd"

      },
      {
        departmentId: "3ce80c11-9b18-4a4f-9784-1aca9c96200b",
        name: "Khoa thần kinh",
        hospitalId: "f7fdfaf0-7f60-44b6-8d37-69c47c2c21cd"

      },
      {
        departmentId: "a0d26a52-8fd6-4dfa-aee2-e4650cece265",
        name: "Khoa mắt",
        hospitalId: "f7fdfaf0-7f60-44b6-8d37-69c47c2c21cd"

      },
      {
        departmentId: "5f25d519-de54-4b16-8778-62dde348b5d1",
        name: "Khoa nội tổng quát",
        hospitalId: "f7fdfaf0-7f60-44b6-8d37-69c47c2c21cd"

      },
      {
        departmentId: "3c79d3c7-d8c1-4a5c-aa78-131b451f49c1",
        name: "Khoa thẩm mỹ",
        hospitalId: "f7fdfaf0-7f60-44b6-8d37-69c47c2c21cd"

      },
      {
        departmentId: "b94e363a-aa89-4be9-afcb-7cc80c58134f",
        name: "Khoa vật lý trị liệu",
        hospitalId: "f7fdfaf0-7f60-44b6-8d37-69c47c2c21cd"

      },
      {
        departmentId: "d98ee3b7-ac18-46a6-9c43-853f901ee85b",
        name: "Khoa sản",
        hospitalId: "f7fdfaf0-7f60-44b6-8d37-69c47c2c21cd"

      },
      {
        departmentId: "ff178ddb-c6ef-4025-a4f5-e9a5a9b2b67e",
        name: "Khoa tai mũi họng",
        hospitalId: "8e8e67e0-b971-4efc-b563-587d6e5675d3"

      },
      {
        departmentId: "9be0338e-154e-4f79-ae65-65fbca76f3f2",
        name: "Hóa răng hàm mặt",
        hospitalId: "8e8e67e0-b971-4efc-b563-587d6e5675d3"

      },
      {
        departmentId: "8ed53b76-22d1-4526-b38e-d72690bc8dac",
        name: "Khoa dược",
        hospitalId: "8e8e67e0-b971-4efc-b563-587d6e5675d3"

      },
      {
        departmentId: "a42276bd-db63-4124-8cab-07c952f669d5",
        name: "Khoa cấp cứu",
        hospitalId: "8e8e67e0-b971-4efc-b563-587d6e5675d3"
      },
      {
        departmentId: "d5c55e41-c785-4eb2-898e-5a66860d4bb6",
        name: "Khoa da liễu",
        hospitalId: "8e8e67e0-b971-4efc-b563-587d6e5675d3"
      },
      {
        departmentId: "cd0d304a-bb0b-44f1-8121-3d38fa87c2ed",
        name: "Khoa tâm lý",
        hospitalId: "8e8e67e0-b971-4efc-b563-587d6e5675d3"
      },
      {
        departmentId: "00da8250-86ee-4444-a6cc-34f7a6953a81",
        name: "Khoa Nhi",
        hospitalId: "8e8e67e0-b971-4efc-b563-587d6e5675d3"
      },
      {
        departmentId: "a6fffe00-9b75-4676-acfe-585d8947c814",
        name: "Khoa ngoại tổng quát",
        hospitalId: "8e8e67e0-b971-4efc-b563-587d6e5675d3"
      },
      {
        departmentId: "0690d992-e0e1-4315-9262-b76e4a1829fa",
        name: "Khoa thần kinh",
        hospitalId: "8e8e67e0-b971-4efc-b563-587d6e5675d3"
      },
      {
        departmentId: "8e19412a-1643-42f1-bd61-ff312c4ca560",
        name: "Khoa mắt",
        hospitalId: "8e8e67e0-b971-4efc-b563-587d6e5675d3"

      },
      {
        departmentId: "7c9deee2-6ba0-40ad-b066-4baa1954a2bc",
        name: "Khoa nội tổng quát",
        hospitalId: "8e8e67e0-b971-4efc-b563-587d6e5675d3"

      },

      
      {
        departmentId: "d5fc42af-58b8-425f-9402-b9be2b163d83",
        name: "Khoa nội tổng quát",
        hospitalId: "cca2c6dc-f9dc-4560-ab75-154fcfeb529c"

      },
      {
        departmentId: "0f20fec9-6d62-4ebd-9020-74f44416bcb5",
        name: "Khoa thẩm mỹ",
        hospitalId: "cca2c6dc-f9dc-4560-ab75-154fcfeb529c"

      },
      {
        departmentId: "a8c62057-ae37-4480-bb26-813ce70c8854",
        name: "Khoa vật lý trị liệu",
        hospitalId: "cca2c6dc-f9dc-4560-ab75-154fcfeb529c"

      },
      {
        departmentId: "fe214c8a-b65b-44ee-bdc7-7b06dbcbfa53",
        name: "Khoa sản",
        hospitalId: "cca2c6dc-f9dc-4560-ab75-154fcfeb529c"

      },
      {
        departmentId: "918b7b6a-39ec-488a-a0dc-42472fd41b03",
        name: "Khoa tai mũi họng",
        hospitalId: "cca2c6dc-f9dc-4560-ab75-154fcfeb529c"

      },
      {
        departmentId: "87f53e6d-610f-4a62-b3c9-2c88c424e5b8",
        name: "Hóa răng hàm mặt",
        hospitalId: "cca2c6dc-f9dc-4560-ab75-154fcfeb529c"

      },
      {
        departmentId: "f59c002a-2a50-40a2-be02-f1985af14655",
        name: "Khoa dược",
        hospitalId: "cca2c6dc-f9dc-4560-ab75-154fcfeb529c"

      },
      {
        departmentId: "5ab81068-d900-41f8-9b5c-1ff7936b1d23",
        name: "Khoa cấp cứu",
        hospitalId: "cca2c6dc-f9dc-4560-ab75-154fcfeb529c"
      },
      {
        departmentId: "fce660bd-8293-4a06-a4b0-693494e0cf79",
        name: "Khoa da liễu",
        hospitalId: "cca2c6dc-f9dc-4560-ab75-154fcfeb529c"
      },
      {
        departmentId: "92d2456c-2cc9-4ad6-8e1e-bbb6074755d7",
        name: "Khoa tâm lý",
        hospitalId: "cca2c6dc-f9dc-4560-ab75-154fcfeb529c"
      },
      {
        departmentId: "e553a3fd-40a8-43d4-be1b-7b8ffb7e4486",
        name: "Khoa Nhi",
        hospitalId: "cca2c6dc-f9dc-4560-ab75-154fcfeb529c"

      },
      {
        departmentId: "7f3a894c-29d7-4347-b15c-7fea71bcc9ab",
        name: "Khoa ngoại tổng quát",
        hospitalId: "cca2c6dc-f9dc-4560-ab75-154fcfeb529c"

      },
      {
        departmentId: "9108105f-0ed9-4cb3-b7f9-6d8285ebe8ec",
        name: "Khoa thần kinh",
        hospitalId: "cca2c6dc-f9dc-4560-ab75-154fcfeb529c"

      },
      {
        departmentId: "8e8d3ed1-f49c-4ada-9905-218c5b6b32c1",
        name: "Khoa mắt",
        hospitalId: "cca2c6dc-f9dc-4560-ab75-154fcfeb529c"

      },
      {
        departmentId: "172d799c-919c-456a-ba4d-3b0d47d15bd7",
        name: "Khoa nội tổng quát",
        hospitalId: "cca2c6dc-f9dc-4560-ab75-154fcfeb529c"

      },

      // ////////////

      {
        departmentId: "11ceaf3c-4cb2-46d2-824a-3ead3d45f1b9",
        name: "Khoa ngoại tổng quát",
        hospitalId: "4fab9aca-acd3-4956-8e83-cabf6213559f"

      },
      {
        departmentId: "3dede18e-a24a-4484-9005-a69a4bcad580",
        name: "Khoa thần kinh",
        hospitalId: "4fab9aca-acd3-4956-8e83-cabf6213559f"

      },
      {
        departmentId: "74967bc9-e282-40d2-a2b2-69902103a267",
        name: "Khoa mắt",
        hospitalId: "4fab9aca-acd3-4956-8e83-cabf6213559f"

      },
      {
        departmentId: "d65bf7af-a0f1-471b-963d-948c98ecfcf0",
        name: "Khoa nội tổng quát",
        hospitalId: "4fab9aca-acd3-4956-8e83-cabf6213559f"

      },
      {
        departmentId: "3b2aab39-55e6-4e81-94d9-82734b5b7aae",
        name: "Khoa thẩm mỹ",
        hospitalId: "4fab9aca-acd3-4956-8e83-cabf6213559f"

      },
      {
        departmentId: "0dcbd66f-b057-47d3-b773-d13e1484b36e",
        name: "Khoa vật lý trị liệu",
        hospitalId: "4fab9aca-acd3-4956-8e83-cabf6213559f"

      },
      {
        departmentId: "3214481e-bd09-449f-b9f7-cda26cfe105c",
        name: "Khoa sản",
        hospitalId: "4fab9aca-acd3-4956-8e83-cabf6213559f"

      },
      {
        departmentId: "e1ab24c5-da3c-46d2-8f23-c3eef6d98a00",
        name: "Khoa tai mũi họng",
        hospitalId: "4fab9aca-acd3-4956-8e83-cabf6213559f"

      },
      {
        departmentId: "f4252b8b-3a17-4f97-ac02-cd27669df2b3",
        name: "Hóa răng hàm mặt",
        hospitalId: "4fab9aca-acd3-4956-8e83-cabf6213559f"

      },
      {
        departmentId: "4f8f61c6-7863-4595-abfe-349d31eccca1",
        name: "Khoa dược",
        hospitalId: "4fab9aca-acd3-4956-8e83-cabf6213559f"

      },
      {
        departmentId: "b01ce8dc-caad-46e0-a0ae-f53be6e240fe",
        name: "Khoa cấp cứu",
        hospitalId: "4fab9aca-acd3-4956-8e83-cabf6213559f"
      },
      {
        departmentId: "d7fdcc24-849f-47b3-924e-7147916fc1d1",
        name: "Khoa da liễu",
        hospitalId: "4fab9aca-acd3-4956-8e83-cabf6213559f"
      },
      {
        departmentId: "e6f0e231-5922-46a8-b9aa-0c631cb00062",
        name: "Khoa tâm lý",
        hospitalId: "4fab9aca-acd3-4956-8e83-cabf6213559f"
      },
      {
        departmentId: "3519fa92-5526-4eda-9e76-cf9c1b50ec0c",
        name: "Khoa Nhi",
        hospitalId: "4fab9aca-acd3-4956-8e83-cabf6213559f"

      },
      {
        departmentId: "b190973c-cd78-4fda-9bef-9ee7a451a17c",
        name: "Khoa ngoại tổng quát",
        hospitalId: "4fab9aca-acd3-4956-8e83-cabf6213559f"

      },
      {
        departmentId: "c9fa6eb4-3ad3-4804-9da2-491472d508f6",
        name: "Khoa thần kinh",
        hospitalId: "4fab9aca-acd3-4956-8e83-cabf6213559f"

      },
      {
        departmentId: "44d260a4-594e-4d84-afdb-cc0836476125",
        name: "Khoa mắt",
        hospitalId: "4fab9aca-acd3-4956-8e83-cabf6213559f"

      },
      {
        departmentId: "c35d89e4-b5c4-4ed0-9601-f5cd441948da",
        name: "Khoa nội tổng quát",
        hospitalId: "4fab9aca-acd3-4956-8e83-cabf6213559f"

      },

      {
        departmentId: "483ebd2b-21e3-4622-8951-f2e21318ee86",
        name: "Khoa nội tổng quát",
        hospitalId: "4fab9aca-acd3-4956-8e83-cabf6213559f"

      },
      {
        departmentId: "9dd6b9d1-74f7-4e1d-a0a9-75522a26ae85",
        name: "Khoa thẩm mỹ",
        hospitalId: "4fab9aca-acd3-4956-8e83-cabf6213559f"

      },
      {
        departmentId: "4b6c5533-5b86-4576-84ac-07b223e13097",
        name: "Khoa vật lý trị liệu",
        hospitalId: "4fab9aca-acd3-4956-8e83-cabf6213559f"

      },
      {
        departmentId: "c51a880a-275f-4ae6-99c8-303651f8a3e7",
        name: "Khoa sản",
        hospitalId: "4fab9aca-acd3-4956-8e83-cabf6213559f"

      },

      //////////////
      
      {
        departmentId: "2dd4620b-815e-456d-8a21-9f67863795af",
        name: "Khoa ngoại tổng quát",
        hospitalId: "35dd30c7-41f0-436d-8c3e-56089d2d03f1"

      },
      {
        departmentId: "ea002b3b-7cf8-4f61-b10a-350cf99fcd42",
        name: "Khoa thần kinh",
        hospitalId: "35dd30c7-41f0-436d-8c3e-56089d2d03f1"

      },
      {
        departmentId: "3157e990-17a1-4988-8a09-715c969b5b62",
        name: "Khoa mắt",
        hospitalId: "35dd30c7-41f0-436d-8c3e-56089d2d03f1"

      },
      {
        departmentId: "2103985c-db66-42b7-ae0a-1973857b8cc2",
        name: "Khoa nội tổng quát",
        hospitalId: "35dd30c7-41f0-436d-8c3e-56089d2d03f1"

      },
      {
        departmentId: "3dfa2226-e880-46de-bb17-432987da8455",
        name: "Khoa thẩm mỹ",
        hospitalId: "35dd30c7-41f0-436d-8c3e-56089d2d03f1"

      },
      {
        departmentId: "201a05ea-7f0b-4fec-b13f-d7bd7d0e266f",
        name: "Khoa vật lý trị liệu",
        hospitalId: "35dd30c7-41f0-436d-8c3e-56089d2d03f1"

      },
      {
        departmentId: "0513a180-af2f-4ebc-93bc-42b4c109e107",
        name: "Khoa sản",
        hospitalId: "35dd30c7-41f0-436d-8c3e-56089d2d03f1"

      },
      {
        departmentId: "d6201999-6f25-4487-a056-756e666128cc",
        name: "Khoa tai mũi họng",
        hospitalId: "35dd30c7-41f0-436d-8c3e-56089d2d03f1"

      },
      {
        departmentId: "fd9ca11f-a5e9-48af-9712-72ecbf6fc120",
        name: "Hóa răng hàm mặt",
        hospitalId: "35dd30c7-41f0-436d-8c3e-56089d2d03f1"

      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(DEPARTMENT, null, {});
  }
};