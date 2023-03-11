import { Model,  PrimaryKey, Column, Table, ForeignKey, CreatedAt, UpdatedAt, DataType, BelongsTo, BeforeCreate } from 'sequelize-typescript';
import {Hospital, DepartmentDetail} from '.'
import { generateUUID } from '../utils/uuid';

@Table({
    tableName: 'department',
})
export class Department  extends Model{
  @PrimaryKey
  @Column({
      type: DataType.STRING,
      allowNull: false
  })
  public department_id!: string;

  @ForeignKey(() => Hospital)
  @Column({ type: DataType.STRING })
  public hospital_id!: string;

  @ForeignKey(() => DepartmentDetail)
  @Column({ type: DataType.STRING })
  public department_detail_id!: string;

  @CreatedAt
  public readonly createdAt!: Date;

  @UpdatedAt
  public readonly updatedAt!: Date;

  // association

  @BelongsTo(() => Hospital)
  private hospital!: Hospital
  
  @BelongsTo(() => DepartmentDetail)
  private departmentDetail!: DepartmentDetail

  public getHospital(): Hospital {
    return this.hospital
  }

  public getDepartmentDetail(): DepartmentDetail {
    return this.departmentDetail
  }

  @BeforeCreate
  static generateID(instance: Department) {
    instance.department_id = generateUUID()
  }
}