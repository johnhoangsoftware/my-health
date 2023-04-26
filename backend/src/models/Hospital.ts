import { Model, PrimaryKey, Column, Table, CreatedAt, DataType, HasMany, BeforeCreate, UpdatedAt } from 'sequelize-typescript';
import { Department } from '.';
import { generateUUID } from '../utils/uuid';

@Table({ tableName: 'Hospitals' })
export class Hospital extends Model{
  @PrimaryKey
  @Column({ type: DataType.STRING })
  public hospitalId!: string;

  @Column({ type: DataType.STRING })
  public name!: string;

  @Column({ type: DataType.STRING })
  public address!: string;

  @Column({ type: DataType.STRING })
  public description!: string;

  @Column({ type: DataType.STRING })
  public avatar!: string;

  @CreatedAt
  public readonly createdAt!: Date;

  @UpdatedAt
  public readonly updatedAt!: Date;

  // associate

  @HasMany(() => Department)
  private departments!: Department[]

  public getDepartments(): Department[] {
    return this.departments
  }

  @BeforeCreate
  static generateID(instance: Hospital) {
    instance.hospitalId = generateUUID()
  }
}