import { Model,  PrimaryKey, Column, Table, CreatedAt, UpdatedAt, DataType, BeforeCreate } from 'sequelize-typescript';
import { generateUUID } from '../utils/uuid';

@Table({ tableName: 'DepartmentDetails' })
export class DepartmentDetail extends Model{
  @PrimaryKey
  @Column({ type: DataType.STRING })
  public department_detailId!: string;

  @Column({ type: DataType.STRING })
  public name!: string;

  @CreatedAt
  public readonly created_at!: Date;

  @UpdatedAt
  public readonly updated_at!: Date;

  @BeforeCreate
  static generateID(instance: DepartmentDetail) {
    instance.department_detailId = generateUUID()
  }
}