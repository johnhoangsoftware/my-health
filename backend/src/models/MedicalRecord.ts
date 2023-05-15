import { Model,  PrimaryKey, Column, Table, ForeignKey, CreatedAt, UpdatedAt, DataType, DeletedAt, BelongsTo, HasMany, BeforeCreate } from 'sequelize-typescript';
import { generateUUID } from '../utils/uuid';
import { Patient } from './Patient';

@Table({ tableName: 'MedicalRecords' })
export class MedicalRecord extends Model {
    @PrimaryKey
    @Column({ type: DataType.STRING })
    public medicalRecordId!: string;
    
    @Column({ type: DataType.STRING })
    public name!: string

    @Column({ type: DataType.STRING })
    public gender!: string

    @Column({ type: DataType.STRING })
    public birthDay!: Date

    @Column({ type: DataType.STRING })
    public relationship!: string

    @Column({ type: DataType.STRING })
    public phone!: string

    @Column({ type: DataType.STRING })
    public address!: string

    @Column({ type: DataType.STRING })
    public content!: string

    @CreatedAt
    public readonly createdAt!: Date;
  
    @UpdatedAt
    public readonly updatedAt!: Date;

    @ForeignKey(() => Patient)
    public patientId!: string;

    // associate

    @BelongsTo(() => Patient)
    private patient!: Patient

    public GetPatient() {
        return this.patient
    }

    @BeforeCreate
    static generateID(instance: MedicalRecord) {
        instance.medicalRecordId = generateUUID()
    }
}