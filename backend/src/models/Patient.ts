import { Model,  PrimaryKey, Column, Table, ForeignKey, CreatedAt, UpdatedAt, DataType, DeletedAt, BelongsTo, HasMany, BeforeCreate } from 'sequelize-typescript';
import { Department, User } from '.';
import { generateUUID } from '../utils/uuid';
import { MedicalRecord } from './MedicalRecord';

@Table({ tableName: 'Patients' })
export class Patient extends Model {
    @PrimaryKey
    @Column({ type: DataType.STRING })
    public patientId!: string;

    @Column({ type: DataType.STRING })
    @ForeignKey(() => User)
    public userId!: string

    // associate
    
    @BelongsTo(() => User)
    private user!: User
    
    public GetUser() {
        return this.user
    }

    @HasMany(() => MedicalRecord)
    private medicalRecords!: MedicalRecord[]
    
    public GetMedicalRecords() {
        return this.medicalRecords
    }

    @BeforeCreate
    static generateID(instance: Patient) {
        instance.patientId = generateUUID()
    }
}