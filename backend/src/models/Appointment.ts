import { Model,  PrimaryKey, Column, Table, ForeignKey, CreatedAt, UpdatedAt, DataType, BelongsTo, BeforeCreate } from 'sequelize-typescript';
import {User, TestPackage, MedicalRecord, Department} from '.'
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

  @ForeignKey(() => MedicalRecord)
  @Column({ type: DataType.STRING })
  public medicalRecordId!: string

  @ForeignKey(() => TestPackage)
  @Column({ type: DataType.STRING })
  public testPackageId!: string;

  @ForeignKey(() => Department)
  @Column({ type: DataType.STRING })
  public departmentId!: string

  // association

  @BelongsTo(() => TestPackage)
  private testPackage!: TestPackage
  
  @BelongsTo(() => Department)
  private department!: Department
  
  @BelongsTo(() => MedicalRecord)
  private medicalRecord!: MedicalRecord

  public getTestPackage(): TestPackage {
    return this.testPackage
  }

  public getDepartment() {
    return this.department
  }

  public getMedicalRecord() {
    return this.medicalRecord
  }

  @BeforeCreate
  static generateID(instance: Appointment) {
    instance.appointmentId = generateUUID()
  }

}