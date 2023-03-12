export interface CreateServiceDTO {
    name: string
    price: number;
    description: string | null;
    hospital_id: string;
}

export interface UpdateServiceDTO extends Partial<CreateServiceDTO> { }