export interface CreateAppointmentDTO {
    profileId: string
    departmentId: string
    date: string
    time: string
}

export interface UpdateAppointmentDTO extends Partial<CreateAppointmentDTO> { }
