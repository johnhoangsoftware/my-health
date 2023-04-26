export interface CreateUserDTO {
    email: string;
    password: string;
    name?: string;
    birthDay?: Date;
    avatar?: string;
    phone?: string;
    address?:string
    role: "PATIENT" | "DOCTOR" | "ADMIN";
}

export interface UpdateUserDTO extends Partial<CreateUserDTO> { }