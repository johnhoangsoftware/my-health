import { UserDTO } from "../dtos/user.dto";
import CustomError from "../error/CustomError";
import { User } from "../models";
import {encodedPassword} from '../utils/bcrypt'

export  function doSomething() {
    return Promise.reject(new CustomError(401, "Here is error"))
    // or just throw new CustomError(401, "Here is error")
}