import { validateCreateHospital, validateUpdateHospital } from './../validator/hospital';
import { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import ErrorWrapperHandler from '../utils/ErrorWrapperHandler'

import * as userService from '../services/user.service'
import * as hospitalService from '../services/hospital.service'
import * as serviceService from '../services/service.service'
import { validateCreateUser } from '../validator/user'
import { CreateHospitalDTO, UpdateHospitalDTO } from '../dtos/hospital.dto';
import { CreateUserDTO } from '../dtos/user.dto';
import { validateCreateService, validateUpdateService } from '../validator/service';
import { CreateServiceDTO, UpdateServiceDTO } from '../dtos/service.dto';

export const createUser = ErrorWrapperHandler(async (req: Request, res: Response) => {
    let data = req.body
    const userDTO = validateCreateUser(data as CreateUserDTO)
    const user = await userService.create(userDTO)
    return res.status(StatusCodes.OK).json({
        message: `Create user successfully. ID: ${user.user_id}`
    })
})

export const deleteUserByID = ErrorWrapperHandler(async (req: Request, res: Response) => {
    const userId = req.params.id
    await userService.deleteByID(userId)
    return res.status(StatusCodes.OK).json({
        message: `Delete user successfully. ID: ${userId}`
    })
})

export const createHospital = ErrorWrapperHandler(async (req: Request, res: Response) => {
    const data = req.body
    const hospitalDTO = validateCreateHospital(data as CreateHospitalDTO)
    const hospital = await hospitalService.create(hospitalDTO)
    return res.status(StatusCodes.OK).json({
        message: `Create hospital successfully. ID: ${hospital.hospital_id}`
    })
})

export const updateHospital = ErrorWrapperHandler(async (req: Request, res: Response) => {
    const data = req.body
    const {id} = req.params
    const hospitalDTO = validateUpdateHospital(data as UpdateHospitalDTO)
    await hospitalService.updateByID(id, hospitalDTO);
    return res.status(StatusCodes.OK).json({
        message: `Update hospital successfully. ID: ${id}`
    })
})

export const deleteHospitalByID = ErrorWrapperHandler(async (req: Request, res: Response) => {
    const {id} = req.params
    await hospitalService.deleteByID(id)
    return res.status(StatusCodes.OK).json({
        message: `Delete hospital successfully. ID: ${id}`
    })
})

export const createService = ErrorWrapperHandler(async (req: Request, res: Response) => {
    const data = req.body
    const serviceDTO = validateCreateService(data as CreateServiceDTO)
    const service = await serviceService.create(serviceDTO)
    return res.status(StatusCodes.OK).json({
        message: `Create service successfully. ID: ${service.service_id}`
    })
})

export const updateService = ErrorWrapperHandler(async (req: Request, res: Response) => {
    const data = req.body
    const {id} = req.params
    const serviceDTO = validateUpdateService(data as UpdateServiceDTO)
    await serviceService.updateByID(id, serviceDTO);
    return res.status(StatusCodes.OK).json({
        message: `Update service successfully. ID: ${id}`
    })
})

export const deleteServiceByID = ErrorWrapperHandler(async (req: Request, res: Response) => {
    const {id} = req.params
    await serviceService.deleteByID(id)
    return res.status(StatusCodes.OK).json({
        message: `Delete service successfully. ID: ${id}`
    })
})
