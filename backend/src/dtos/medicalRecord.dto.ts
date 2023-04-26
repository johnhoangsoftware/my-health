export interface CreateMedicalRecordDTO {
    name: string;
    gender: string
    birthDay: string
    relationship: string
    phone: string
    address: string
    patientId:string
}

export interface UpdateMedicalRecordDTO extends Partial<CreateMedicalRecordDTO> { }
