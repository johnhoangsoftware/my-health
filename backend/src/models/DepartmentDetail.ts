import { Model,  PrimaryKey, Column, Table, CreatedAt, UpdatedAt, DataType, BeforeCreate } from 'sequelize-typescript';
import { generateUUID } from '../utils/uuid';

@Table({ tableName: 'department_detail' })
export class DepartmentDetail extends Model{
  @PrimaryKey
  @Column({ type: DataType.STRING })
  public department_detail_id!: string;

  @Column({ type: DataType.STRING })
  public name!: string;

  @CreatedAt
  public readonly createdAt!: Date;

  @UpdatedAt
  public readonly updatedAt!: Date;

  @BeforeCreate
  static generateID(instance: DepartmentDetail) {
    instance.department_detail_id = generateUUID()
  }
}