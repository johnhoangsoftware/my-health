import { query }  from 'express'
import { Op } from 'sequelize'
import { Department, Doctor, Hospital, User } from "../models"
import { Sequelize } from 'sequelize-typescript'


const LIMIT_PREVIEW_RECORDS = 2

export const searchPreview = async(keyword :string) => {
    if (!keyword) {
            return []
    }
    const doctorsPromise = User.findAll({
        where: {
            [Op.and]: [
                {
                    role: 'DOCTOR'
                },
                Sequelize.literal(`CONCAT(firstName, " ", lastName) LIKE "%${keyword}%"`)
            ]
            
        },
        attributes: ["userId", "firstName", "lastName", "avatar"],
        include: {
            model: Doctor,
            attributes: ["doctorId"],
            include: [{
                model: Department,
                attributes: ["name"]
            }]
        },
        limit: LIMIT_PREVIEW_RECORDS
    })
    const hospitalPromise = Hospital.findAll({
        where: {
            name: {
                [Op.like]: `%${keyword}%`
            }
        },
        attributes: ["hospitalId", "name", "avatar"],
        limit: LIMIT_PREVIEW_RECORDS
    })
    return Promise.all([doctorsPromise, hospitalPromise])
}

export const searchDoctors = async(keyword: string, d: string) => {
    return User.findAll({
        where: {
            [Op.and]: [
                {
                    role: 'DOCTOR'
                },
                Sequelize.literal(`CONCAT(firstName, " ", lastName) LIKE "%${keyword}%"`)
            ]
            
        },
        attributes: ["userId", "firstName", "lastName", "avatar"],
        include: [{
            model: Doctor,
            attributes: ["doctorId"],
            include: [{
                model: Department,
                attributes: ["name", "departmentId"],
                where: {
                    name: {
                        [Op.like]: `%${d}%`
                    }
                },
                required: true
            }],
            required: true
        }],
    })
}

export const searchHospitals = async (keyword: string) => {
    return Hospital.findAll({
        where: {
            name: {
                [Op.like]: `%${keyword}%`
            }
        },
        attributes: ["hospitalId", "name", "avatar"],
    })
}