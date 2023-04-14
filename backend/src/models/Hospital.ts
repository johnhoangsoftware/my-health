import { Model,  PrimaryKey, Column, Table, ForeignKey, CreatedAt, UpdatedAt, DataType, DeletedAt, BelongsTo, HasMany, BeforeCreate } from 'sequelize-typescript';
import { Department, Service } from '.';
import { generateUUID } from '../utils/uuid';

@Table({ tableName: 'hospital' })
export class Hospital extends Model{
  @PrimaryKey
  @Column({ type: DataType.STRING })
  public hospital_id!: string;

  @Column({ type: DataType.STRING })
  public name!: string;

  @CreatedAt
  public readonly created_at!: Date;

  @UpdatedAt
  public readonly updated_at!: Date;

  @Column({ type: DataType.STRING })
  public address!: string;

  // associate

  @HasMany(() => Department)
  private departments!: Department[]

  @HasMany(() => Service)
  private services!: Service[]

  public getDepartments(): Department[] {
    return this.departments
  }

  public getServices(): Service[] {
    return this.services
  }

  @BeforeCreate
  static generateID(instance: Hospital) {
    instance.hospital_id = generateUUID()
  }
}