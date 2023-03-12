export interface CreateUserDTO {
    email: string;
    password: string;
    firstName?: string;
    lastName?: string;
    birthDay?: Date;
    avatar?: string;
    phone?: string;
    address?:string
    role: "PATIENT" | "DOCTOR";
}

export interface UpdateUserDTO extends Partial<CreateUserDTO> { }