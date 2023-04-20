export interface CreateTestPackageDTO {
    name: string
    price: number;
    description: string | null;
    hospitalId: string;
}

export interface UpdateTestPackageDTO extends Partial<CreateTestPackageDTO> { }