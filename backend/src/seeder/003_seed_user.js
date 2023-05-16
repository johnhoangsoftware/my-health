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
                "avatar": "https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg",
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
                "avatar": "https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg",
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
                "avatar": "https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/287084998_1683327488671501_4510915075990411134_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=174925&_nc_ohc=AtLj97ZMMRQAX-ysl4g&_nc_ht=scontent.fhan14-2.fna&oh=00_AfBWZX_0IoSL_swl0G-F7h4eZirgYtvP_MU7Pn7Vh97svg&oe=64691255",
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
                "avatar": "https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/313073190_1710675175970303_4591391736121357277_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=ad2b24&_nc_ohc=lsZMDmNF_b4AX-SMxMj&_nc_ht=scontent.fhan14-2.fna&oh=00_AfBkt8qm0aDPlv6wTPzvbNqM67NFjMdQ4D_RYr-Y47EAwA&oe=64684C5B",
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
                "avatar": "https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg",
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
                "avatar": "https://scontent.fhan14-3.fna.fbcdn.net/v/t1.6435-9/126175158_669374687280923_2953435101670281053_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=7uBwzopJBVgAX8kyIss&_nc_ht=scontent.fhan14-3.fna&oh=00_AfDrZy8rk3puOwbn6R1zEmlxst1KbqVbx2WqRKYl559f-A&oe=648B2971",
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