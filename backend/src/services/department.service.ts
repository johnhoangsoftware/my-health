import { Department } from "../models"

export const allDepartments = async() => {
    return Department.findAll({
        attributes: ["name", "avatar"],
        group: ["name", "avatar"]
    })
}