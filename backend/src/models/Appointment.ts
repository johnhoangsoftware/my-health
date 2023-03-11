import { Model,  PrimaryKey, Column, Table, ForeignKey, CreatedAt, UpdatedAt, DataType, DeletedAt, BelongsTo, BeforeCreate } from 'sequelize-typescript';
import {User, Service} from '.'
import { generateUUID } from '../utils/uuid';

@Table({ tableName: 'appointment' })
export class Appointment extends Model{
  @PrimaryKey
  @Column({ type: DataType.STRING })
  public appointment_id!: string;

  @Column({ type: DataType.STRING })
  public status!: string;

  @Column({ type: DataType.DATE })
  public time!: Date;

  @CreatedAt
  public readonly createdAt!: Date;

  @UpdatedAt
  public readonly updatedAt!: Date;

  @ForeignKey(() => User)
  @Column({ type: DataType.STRING })
  public patient_id!: string;

  @ForeignKey(() => User)
  @Column({ type: DataType.STRING })
  public doctor_id!: string;

  @ForeignKey(() => Service)
  @Column({ type: DataType.STRING })
  public service_id!: string;

  @Column({ type: DataType.STRING })
  public address!: string;

  // association

  @BelongsTo(() => Service)
  private service!: Service
  
  @BelongsTo(() => User)
  private patient!: User
  
  @BelongsTo(() => User)
  private doctor!: User

  public getService(): Service {
    return this.service
  }

  public getPatient(): User {
    return this.patient
  }

  public getDoctor(): User{
    return this.doctor
  }

  @BeforeCreate
  static generateID(instance: Appointment) {
    instance.appointment_id = generateUUID()
  }

}