export interface CreateAppointmentDTO {
    date: string
    time: string
    status: string
    medicalRecordId: string
    departmentId: string
    testPackageId: string

}

export interface UpdateAppointmentDTO extends Partial<CreateAppointmentDTO> { }
