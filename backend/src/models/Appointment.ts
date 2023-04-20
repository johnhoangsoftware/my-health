import { Model,  PrimaryKey, Column, Table, ForeignKey, CreatedAt, UpdatedAt, DataType, DeletedAt, BelongsTo, BeforeCreate, Default } from 'sequelize-typescript';
import {User, TestPackage} from '.'
import { generateUUID } from '../utils/uuid';

@Table({ tableName: 'Appointments' })
export class Appointment extends Model{
  @PrimaryKey
  @Column({ type: DataType.STRING })
  public appointmentId!: string;

  @Column({type: DataType.ENUM("PENDING", "DONE")})
  public status!: string;

  @Column({ type: DataType.DATE })
  public dateTime!: Date;

  @CreatedAt
  public readonly createdAt!: Date;

  @UpdatedAt
  public readonly updatedAt!: Date;

  @ForeignKey(() => User)
  @Column({ type: DataType.STRING })
  public patientId!: string;

  @ForeignKey(() => User)
  @Column({ type: DataType.STRING })
  public doctorId!: string;

  @ForeignKey(() => TestPackage)
  @Column({ type: DataType.STRING })
  public serviceId!: string;

  @Column({ type: DataType.STRING })
  public address!: string;

  // association

  @BelongsTo(() => TestPackage)
  private service!: TestPackage
  
  @BelongsTo(() => User)
  private patient!: User
  
  @BelongsTo(() => User)
  private doctor!: User

  public getService(): TestPackage {
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
    instance.appointmentId = generateUUID()
  }

}