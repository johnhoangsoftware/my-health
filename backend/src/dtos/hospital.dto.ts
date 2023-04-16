export interface CreateHospitalDTO {
    name: string;
    address: string
}

export interface UpdateHospitalDTO extends Partial<CreateHospitalDTO> { }
