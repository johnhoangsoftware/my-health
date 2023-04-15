import { Model,  PrimaryKey, Column, Table, ForeignKey, CreatedAt, UpdatedAt, DataType, DeletedAt, BelongsTo, HasMany, BeforeCreate } from 'sequelize-typescript';
import { Department, User } from '.';
import { generateUUID } from '../utils/uuid';

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
        
    @HasMany(() => Department)
    private department!: Department

    public GetUser() {
        return this.user
    }

    public GetDepartment() {
        return this.department
    }

    @BeforeCreate
    static generateID(instance: Patient) {
        instance.patientId = generateUUID()
    }
}