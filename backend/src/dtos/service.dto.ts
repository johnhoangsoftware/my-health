export interface CreateServiceDTO {
    name: string
    price: number;
    description: string | null;
    hospitalId: string;
}

export interface UpdateServiceDTO extends Partial<CreateServiceDTO> { }