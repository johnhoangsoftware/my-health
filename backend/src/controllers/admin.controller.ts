import { validateCreateHospital, validateUpdateHospital } from './../validator/hospital';
import { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import ErrorWrapperHandler from '../utils/ErrorWrapperHandler'

import * as userService from '../services/user.service'
import * as hospitalService from '../services/hospital.service'
import * as serviceService from '../services/testPackage.service'
import { validateCreateUser } from '../validator/user'
import { CreateHospitalDTO, UpdateHospitalDTO } from '../dtos/hospital.dto';
import { CreateUserDTO } from '../dtos/user.dto';
import { validateCreateService, validateUpdateService } from '../validator/service';
import { CreateTestPackageDTO, UpdateTestPackageDTO } from '../dtos/testPackage.dto';

// [POST] /admin/user
export const createUser = ErrorWrapperHandler(async (req: Request, res: Response) => {
    let data = req.body
    const userDTO = validateCreateUser(data as CreateUserDTO)
    const user = await userService.createUser(userDTO)
    return res.status(StatusCodes.OK).json({
        message: `Create user successfully.`,
        data: user.userId
    })
})

// [DELETE] /admin/user/:id
export const deleteUserByID = ErrorWrapperHandler(async (req: Request, res: Response) => {
    const userId = req.params.id
    // await userService.deleteByID(userId)
    return res.status(StatusCodes.OK).json({
        message: `Delete user successfully.`,
        data: userId
    })
})

// [POST] /admin/hospital
export const createHospital = ErrorWrapperHandler(async (req: Request, res: Response) => {
    const data = req.body
    const hospitalDTO = validateCreateHospital(data as CreateHospitalDTO)
    const hospital = await hospitalService.create(hospitalDTO)
    return res.status(StatusCodes.OK).json({
        message: `Create hospital successfully`,
        data: hospital.hospitalId
    })
})

// [PATCH] /admin/hospital/:id
export const updateHospital = ErrorWrapperHandler(async (req: Request, res: Response) => {
    const data = req.body
    const {id} = req.params
    const hospitalDTO = validateUpdateHospital(data as UpdateHospitalDTO)
    await hospitalService.updateByID(id, hospitalDTO);
    return res.status(StatusCodes.OK).json({
        message: `Update hospital successfully.`,
        data: id
    })
})

// [DELETE] /admin/hospital/:id
export const deleteHospitalByID = ErrorWrapperHandler(async (req: Request, res: Response) => {
    const {id} = req.params
    await hospitalService.deleteByID(id)
    return res.status(StatusCodes.OK).json({
        message: `Delete hospital successfully.`,
        data: id
    })
})

// [POST] /admin/service
export const createService = ErrorWrapperHandler(async (req: Request, res: Response) => {
    const data = req.body
    const serviceDTO = validateCreateService(data as CreateTestPackageDTO)
    const service = await serviceService.create(serviceDTO)
    return res.status(StatusCodes.OK).json({
        message: `Create service successfully.`,
        data: service
    })
})

// [PATCH] /admin/service/:id
export const updateService = ErrorWrapperHandler(async (req: Request, res: Response) => {
    const data = req.body
    const {id} = req.params
    const serviceDTO = validateUpdateService(data as UpdateTestPackageDTO)
    await serviceService.updateByID(id, serviceDTO);
    return res.status(StatusCodes.OK).json({
        message: `Update service successfully.`,
        data: id,
    })
})

// [DELETE] /admin/service/:id
export const deleteServiceByID = ErrorWrapperHandler(async (req: Request, res: Response) => {
    const {id} = req.params
    await serviceService.deleteByID(id)
    return res.status(StatusCodes.OK).json({
        message: `Delete service successfully.`
    })
})
