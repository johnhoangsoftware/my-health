import { Model,  PrimaryKey, Column, Table, ForeignKey, CreatedAt, UpdatedAt, DataType, DeletedAt, BelongsTo, HasMany, BeforeCreate } from 'sequelize-typescript';
import { Department, User } from '.';
import { generateUUID } from '../utils/uuid';

@Table({ tableName: 'Doctors' })
export class Doctor extends Model {
    @PrimaryKey
    @Column({ type: DataType.STRING })
    public doctorId!: string;

    @Column({ type: DataType.STRING })
    public rank!: string;

    @Column({ type: DataType.STRING })
    public address!: string;

    @Column({ type: DataType.STRING })
    @ForeignKey(() => User)
    public userId!: string

    // associate
    
    @BelongsTo(() => User)
    private user!: User
        
    @BelongsTo(() => Department)
    private department!: Department

    public GetUser() {
        return this.user
    }

    public GetDepartment() {
        return this.department
    }

    @BeforeCreate
    static generateID(instance: Doctor) {
        instance.doctorId = generateUUID()
    }
}