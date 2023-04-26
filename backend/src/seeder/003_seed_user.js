const { USER } = require('../migrations/table_name');

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(USER, [
            {
                "userId": "970f5535-a8e0-4c0c-98d2-182866d43d56",
                "email": "dr.hung@gmail.com",
                "password": "$2b$10$7zg5qOrdOuFGDUSgrUP0I.3zMOfFwWv7hSLAgdOW9guxd4gSR082y",
                "name": "Vu Manh Hung",
                "birthDay": "1996-05-05",
                "avatar": null,
                "phone": "0912329742",
                "role": "DOCTOR",
                "address": "Ha Noi"
            },
            {
                "userId": "10041171-6e54-4305-a31b-1e8da04671cb",
                "email": "dr.ha@gmail.com",
                "password": "$2b$10$7zg5qOrdOuFGDUSgrUP0I.3zMOfFwWv7hSLAgdOW9guxd4gSR082y",
                "name": "Tran Hai Ha",
                "birthDay": "1996-11-11",
                "avatar": null,
                "phone": "0924357580",
                "role": "DOCTOR",
                "address": "Da Nang"
            },
            {
                "userId": "0628a0cb-b291-4a7e-b9ad-8f0c9e697079",
                "email": "dr.minh@gmail.com",
                "password": "$2b$10$7zg5qOrdOuFGDUSgrUP0I.3zMOfFwWv7hSLAgdOW9guxd4gSR082y",
                "name": "Quach Van Minh",
                "birthDay": "989-02-11",
                "avatar": null,
                "phone": "0996547580",
                "role": "DOCTOR",
                "address": "TP. Ho Chi Minh"
            },
            {
                "userId": "cbf0ca69-7459-4dcc-93b1-dfe0f1b1356b",
                "email": "dr.hoang@gmail.com",
                "password": "$2b$10$7zg5qOrdOuFGDUSgrUP0I.3zMOfFwWv7hSLAgdOW9guxd4gSR082y",
                "name": "Nguyen Viet Hoang",
                "birthDay": "2003-01-30",
                "avatar": null,
                "phone": "0966066770",
                "role": "DOCTOR",
                "address": "Ha Noi"
            },
            {
                "userId": "d686b15e-4bbf-496e-a8fc-566bb279feff",
                "email": "dr.soi@gmail.com",
                "password": "$2b$10$7zg5qOrdOuFGDUSgrUP0I.3zMOfFwWv7hSLAgdOW9guxd4gSR082y",
                "name": "Nguyen Thi Soi",
                "birthDay": "1973-02-08",
                "avatar": null,
                "phone": "0915577698",
                "role": "DOCTOR",
                "address": "Ha Noi"
            },
            {
                "userId": "2d683fbb-39aa-4428-8b44-c09394f8641d",
                "email": "patient@gmail.com",
                "password": "$2b$10$7zg5qOrdOuFGDUSgrUP0I.3zMOfFwWv7hSLAgdOW9guxd4gSR082y",
                "name": "Vu Hoang Anh",
                "birthDay": "2002-10-31",
                "avatar": null,
                "phone": "0981066360",
                "role": "PATIENT",
                "address": "Nam Dinh"
            },
        ]);
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete(USER, null, {});
    }
};