export const checkDepartments = [
    {
        key: "heart",
        name: "Khoa nội tim mạch",
        title: "heart",
        image: "./../../assets/department-icon/heart.png"
    },
    {
        key : "oriental",
        name: "Khoa đông y",
        title: "oriental",
        image: "./../../assets/department-icon/oriental.png"
    },
    {
        key:    "internal",
        name: "Khoa nội tổng quát",
        title: "internal",
        image: "./../../assets/department-icon/internal.png"
    },
    {
        key : "beauty",
        name: "Khoa thẩm mỹ",
        title: "beauty",
        image: "./../../assets/department-icon/beauty.png"
    },
    {
        key: "obstetrics",
        name: "Khoa sản",
        title: "obstetrics",
        image: "./../../assets/department-icon/obstetrics.png"
    },
    {
        key: "tooth",
        name: "Khoa răng hàm mặt",
        title: "tooth",
        image: "./../../assets/department-icon/tooth.png"
    },
    {
        key: "emergency",
        name: "Khoa cấp cứu",
        title: "emergency",
        image: "./../../assets/department-icon/emergency.png"
    },
    {
        key : "blood",
        name: "Khoa xét nghiệm",
        title: "blood",
        image: "./../../assets/department-icon/blood.png"
    },
    {
        key: "skin",
        name: "Khoa da liễu",
        title: "skin",
        image: "./../../assets/department-icon/skin.png"
    },
    {
        key: "mental",
        name: "Khoa tâm lý",
        title: "mental",
        image: "./../../assets/department-icon/mental.png"
    },
    {
        key: "bone",
        name: "Khoa chấn thương chỉnh hình",
        title: "bone",
        image: "./../../assets/department-icon/bone.png"
    },
    {
        key: "check",
        name: "Khoa khám bệnh",
        title: "check",
        image: "./../../assets/department-icon/check.png"
    },
    {
        key : "kid",
        name: "Khoa nhi",
        title: "kid",
        image: "./../../assets/department-icon/kid.png"
    },
    {
        key : "brain",
        name: "Khoa thần kinh",
        title: "brain",
        image: "./../../assets/department-icon/brain.png"
    },
    {
        key: "eyes",
        name: "Khoa mắt",
        title: "eyes",
        image: "./../../assets/department-icon/eye.png"
    },
];

export function getDepartmentItemFromName(name: string) {
    const defaultItem =     {
        key: "heart" + name,
        name: "Khoa nội tim mạch",
        title: "heart" + name,
        image: "./../../assets/department-icon/heart.png"
    }
    //var defaultItem = "heart";
    
    checkDepartments.forEach((item) => {
        if (item.name == name) {
            console.log(item.image, " vs ", name, " => ", item.name == name)

            return item
        }
    })
    return defaultItem;
}