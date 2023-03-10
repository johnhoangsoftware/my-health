
drop schema if exists my_health;
create schema my_health;

use my_health;

drop table if exists address;
create table address (
	address_id varchar(36) primary key not null,
    city varchar(30),
    createdAt datetime default current_timestamp,
    updatedAt datetime default current_timestamp
);

insert into address(address_id, city) 
values
("37f8a986-355a-4c11-bde2-8f543e257b83", "Thành phố Hồ Chí Minh"),
("0062503a-8f9d-46cf-b6ce-793984f98779", "Thành phố Hà Nội"),
("b8a0c705-1a84-4d2e-8311-794a64628e4c", "Đà Nẵng")
;

drop table if exists hospital;
create table hospital (
	hospital_id varchar(36) primary key not null,
    name varchar(100),
    createdAt datetime default current_timestamp,
    updatedAt datetime default current_timestamp,
    address_id varchar(36),
    constraint hostpital_address_key foreign key (address_id) references address(address_id)
);

insert into hospital(hospital_id, name, address_id) 
values
("f7fdfaf0-7f60-44b6-8d37-69c47c2c21cd", "Bệnh viện Hồng Đức 2", "37f8a986-355a-4c11-bde2-8f543e257b83"),
("8e8e67e0-b971-4efc-b563-587d6e5675d3", "Bệnh viện Hồng Đức 3", "37f8a986-355a-4c11-bde2-8f543e257b83"),
("cca2c6dc-f9dc-4560-ab75-154fcfeb529c", "Phòng khám Bệnh Viện Quốc Tế Dr.Khoa", "37f8a986-355a-4c11-bde2-8f543e257b83"),
("4ef9c725-d451-473a-b9bd-b0b6e05db155","Bệnh viện phụ sản Hà Nội","0062503a-8f9d-46cf-b6ce-793984f98779"),
("4fab9aca-acd3-4956-8e83-cabf6213559f","Bệnh viện Quân Y 354","0062503a-8f9d-46cf-b6ce-793984f98779"),
("35dd30c7-41f0-436d-8c3e-56089d2d03f1","Bệnh viện Bình Dân Đà Nẵng","b8a0c705-1a84-4d2e-8311-794a64628e4c")
;

drop table if exists department_detail;
create table department_detail (
	department_detail_id varchar(36) primary key not null,
    name varchar(30),
    createdAt datetime default current_timestamp,
    updatedAt datetime default current_timestamp
);

insert into department_detail(department_detail_id, name)
values
("6c6e0cf7-084a-497e-9f47-30ac5ed93401","Khoa Nhi"),
("0fa142b3-d580-475f-95b4-9375fddb4a8b","Khoa ngoại tổng quát"),
("3ce80c11-9b18-4a4f-9784-1aca9c96200b","Khoa thần kinh"),
("a0d26a52-8fd6-4dfa-aee2-e4650cece265","Khoa mắt"),
("5f25d519-de54-4b16-8778-62dde348b5d1","Khoa nội tổng quát"),
("3c79d3c7-d8c1-4a5c-aa78-131b451f49c1","Khoa thẩm mỹ"),
("b94e363a-aa89-4be9-afcb-7cc80c58134f","Khoa vật lý trị liệu"),
("d98ee3b7-ac18-46a6-9c43-853f901ee85b","Khoa sản"),
("ff178ddb-c6ef-4025-a4f5-e9a5a9b2b67e","Khoa tai mũi họng"), -- trace
("9be0338e-154e-4f79-ae65-65fbca76f3f2","Hóa răng hàm mặt"),
("8ed53b76-22d1-4526-b38e-d72690bc8dac","Khoa dược"),
("a42276bd-db63-4124-8cab-07c952f669d5","Khoa cấp cứu"),
("d5c55e41-c785-4eb2-898e-5a66860d4bb6","Khoa da liễu"),
("cd0d304a-bb0b-44f1-8121-3d38fa87c2ed","Khoa tâm lý")
;

drop table if exists department;
create table department(
	department_id varchar(36) primary key not null,
    hospital_id varchar(36),
    department_detail_id varchar(36),
	foreign key (hospital_id) references hospital(hospital_id) on update cascade on delete cascade,
    foreign key (department_detail_id) references department_detail(department_detail_id) on update cascade on delete cascade
);

insert into department(department_id,  department_detail_id, hospital_id)
values
("d31be3b7-c6b1-464e-9c6f-849e9c769e9b","6c6e0cf7-084a-497e-9f47-30ac5ed93401","f7fdfaf0-7f60-44b6-8d37-69c47c2c21cd"),
("72080ecb-3f58-4f0f-a3c2-43d9d4a1e3e6","0fa142b3-d580-475f-95b4-9375fddb4a8b","f7fdfaf0-7f60-44b6-8d37-69c47c2c21cd"),
("0dedab23-12e9-471e-af92-60ed78e9f3b5","a0d26a52-8fd6-4dfa-aee2-e4650cece265","f7fdfaf0-7f60-44b6-8d37-69c47c2c21cd"),
("3e3d1f5b-666d-4120-8069-59c7abbcc3c6","5f25d519-de54-4b16-8778-62dde348b5d1","f7fdfaf0-7f60-44b6-8d37-69c47c2c21cd"),
("66a7edeb-a020-43a5-9953-69c8209714a0","b94e363a-aa89-4be9-afcb-7cc80c58134f","f7fdfaf0-7f60-44b6-8d37-69c47c2c21cd"),
("9e7eebf4-ac33-47b9-a613-099087aa0279","d98ee3b7-ac18-46a6-9c43-853f901ee85b","f7fdfaf0-7f60-44b6-8d37-69c47c2c21cd"),
("cbabd691-5258-4fa4-9625-c4510c0109f3","6c6e0cf7-084a-497e-9f47-30ac5ed93401","8e8e67e0-b971-4efc-b563-587d6e5675d3"),
("ba3a784e-c9db-4564-a496-247af63061a0","0fa142b3-d580-475f-95b4-9375fddb4a8b","8e8e67e0-b971-4efc-b563-587d6e5675d3"),
("0cb22f58-a07b-4ffb-89f2-f1a263463240","a0d26a52-8fd6-4dfa-aee2-e4650cece265","8e8e67e0-b971-4efc-b563-587d6e5675d3"),
("f9d1efb6-1f0a-40ca-8a64-33b339a7b977","5f25d519-de54-4b16-8778-62dde348b5d1","8e8e67e0-b971-4efc-b563-587d6e5675d3"),
("eebddf9c-b909-4ea1-a23c-1c4e0b614b8d","d98ee3b7-ac18-46a6-9c43-853f901ee85b","8e8e67e0-b971-4efc-b563-587d6e5675d3"),
("e29a2249-f701-4352-a2ec-b3e638dca4e7","6c6e0cf7-084a-497e-9f47-30ac5ed93401","cca2c6dc-f9dc-4560-ab75-154fcfeb529c"),
("17c8afe8-13f2-46f6-a4e2-c8da2ecbcf6c","a0d26a52-8fd6-4dfa-aee2-e4650cece265","cca2c6dc-f9dc-4560-ab75-154fcfeb529c"),
("0474e06f-9a9c-498f-aec6-384061b4b662","5f25d519-de54-4b16-8778-62dde348b5d1","cca2c6dc-f9dc-4560-ab75-154fcfeb529c"),
("fa548964-8b2a-414e-8167-0c24729a8d19","6c6e0cf7-084a-497e-9f47-30ac5ed93401","4ef9c725-d451-473a-b9bd-b0b6e05db155"),
("b28991c6-d4b0-4ad8-a59d-6e473a0e2d26","a0d26a52-8fd6-4dfa-aee2-e4650cece265","4ef9c725-d451-473a-b9bd-b0b6e05db155"),
("01b63441-075e-46d5-9798-21582c36ecf2","3c79d3c7-d8c1-4a5c-aa78-131b451f49c1","4ef9c725-d451-473a-b9bd-b0b6e05db155"),
("308dbbdb-548d-4d28-bdbc-e9842b912d3c","b94e363a-aa89-4be9-afcb-7cc80c58134f","4ef9c725-d451-473a-b9bd-b0b6e05db155"),
("7e05fa46-5077-4ed5-a7ed-ab134d774253","d98ee3b7-ac18-46a6-9c43-853f901ee85b","4fab9aca-acd3-4956-8e83-cabf6213559f"),
("4e027973-33b1-4ad2-a9c3-a2883074b2d2","ff178ddb-c6ef-4025-a4f5-e9a5a9b2b67e","4fab9aca-acd3-4956-8e83-cabf6213559f"),
("5e4ef77b-6397-478c-813c-982d131730b9","3ce80c11-9b18-4a4f-9784-1aca9c96200b","4fab9aca-acd3-4956-8e83-cabf6213559f"),
("04502564-2a7d-456e-8b20-42e180b9053e","6c6e0cf7-084a-497e-9f47-30ac5ed93401","35dd30c7-41f0-436d-8c3e-56089d2d03f1"),
("6dedf6d2-368a-46b5-92da-12ca93ae72b4","a0d26a52-8fd6-4dfa-aee2-e4650cece265","35dd30c7-41f0-436d-8c3e-56089d2d03f1"),
("cf2d7726-8566-4939-85bf-998f45f370e1","3c79d3c7-d8c1-4a5c-aa78-131b451f49c1","35dd30c7-41f0-436d-8c3e-56089d2d03f1"),
("2cdacb05-d377-41ed-b999-d1afc9d15e8f","0fa142b3-d580-475f-95b4-9375fddb4a8b","35dd30c7-41f0-436d-8c3e-56089d2d03f1")
;

drop table if exists user;
create table user (
	user_id varchar(36) primary key not null,
    email varchar(100) unique not null,
    password varchar(100) not null,
    firstName varchar(30),
    lastName varchar(30),
    age int,
    avatar varchar(100),
    phone varchar(11),
    `role` enum("PATIENT", "DOCTOR"),
    createdAt datetime default current_timestamp,
    updatedAt datetime default current_timestamp,
    department_id varchar(36),
    address_id varchar(36),
    constraint user_department_key foreign key (department_id) references department(department_id),
    constraint user_address_key foreign key (address_id) references address(address_id)
);

drop table if exists notification;
create table notification(
	notification_id varchar(36) primary key not null,
    content varchar(100),
    link varchar(100),
    isRead bit,
    createdAt datetime default current_timestamp,
    updatedAt datetime default current_timestamp,
    user_id varchar(36),
    constraint user_noti_key foreign key(user_id) references user(user_id)  on update cascade on delete cascade
);

drop table if exists chat;
create table chat(
	chat_id varchar(36) primary key not null,
    createdAt datetime default current_timestamp,
    updatedAt datetime default current_timestamp,
    member_one varchar(36),
    member_two varchar(36),
    constraint member1_chat_key foreign key(member_one) references user(user_id)  on update cascade on delete cascade,
    constraint member2_chat_key foreign key(member_two) references user(user_id)  on update cascade on delete cascade
);

drop table if exists message;
create table message (
	message_id varchar(36) primary key not null,
    type varchar(10) default "none",
    createdAt datetime default current_timestamp,
    deletedAt datetime default NULL,
    chat_id varchar(36),
    sender_id varchar(36),
    constraint msg_chat_key foreign key(chat_id) references chat(chat_id)  on update cascade on delete cascade, 
    constraint msg_user_key foreign key(sender_id) references user(user_id)  on update cascade on delete cascade
);

drop table if exists service;
create table service(
	service_id varchar(36) primary key not null,
	price DOUBLE,
    description TEXT,
    createdAt datetime default current_timestamp,
    updatedAt datetime default current_timestamp,
    hospital_id varchar(36),
	foreign key (hospital_id) references hospital(hospital_id) on update cascade on delete cascade
);

drop table if exists appointment;
create table appointment(
	appointment_id varchar(36) primary key not null,
    status varchar(10),
    time DATETIME,
    createdAt datetime default current_timestamp,
    updatedAt datetime default current_timestamp,
    patient_id varchar(36),
    doctor_id varchar(36),
    service_id varchar(36),
    address_id varchar(36),
    foreign key(patient_id) references user(user_id)  on update cascade on delete cascade,
    foreign key(doctor_id) references user(user_id)  on update cascade on delete cascade,
    foreign key(service_id) references service(service_id)  on update cascade on delete cascade,
    foreign key (address_id) references address(address_id) on update cascade on delete cascade
);

drop table if exists post;
create table post(
	post_id varchar(36) primary key not null,
    topic varchar(30),
    content TEXT,
    createdAt datetime default current_timestamp,
    updatedAt datetime default current_timestamp,
    auth_id varchar(36),
    constraint post_auth_key foreign key(auth_id) references user(user_id)  on update cascade on delete cascade
);

drop table if exists comment;
create table comment(
	comment_id varchar(36) primary key not null,
    content TEXT,
    createdAt datetime default current_timestamp,
    updatedAt datetime default current_timestamp,
    auth_id varchar(36),
    post_id varchar(36),
    constraint cmt_auth_key foreign key(auth_id) references user(user_id)  on update cascade on delete cascade,
    constraint cmt_post_key foreign key(post_id) references post(post_id)  on update cascade on delete cascade
);

drop table if exists reaction;
create table reaction(
	reaction_id varchar(36) primary key not null,
    createdAt datetime default current_timestamp,
    auth_id varchar(36),
	comment_id varchar(36),
    constraint reaction_auth_key foreign key(auth_id) references user(user_id)  on update cascade on delete cascade,
	constraint reaction_cmt_key foreign key(comment_id) references comment(comment_id)  on update cascade on delete cascade
);

