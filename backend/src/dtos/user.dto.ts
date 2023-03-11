export interface UserDTO {
    email: string;
    password: string;
    firstName?: string;
    lastName?: string;
    age?: number;
    avatar?: string;
    phone?: string;
    role: "PATIENT" | "DOCTOR";
}