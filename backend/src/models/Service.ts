import { Model,  PrimaryKey, Column, Table, ForeignKey, CreatedAt, UpdatedAt, DataType, DeletedAt, BelongsTo, BeforeCreate } from 'sequelize-typescript';
import { Hospital } from '.';
import { generateUUID } from '../utils/uuid';

@Table({ tableName: 'Services' })
export class Service extends Model {
  @PrimaryKey
  @Column({ type: DataType.STRING })
  public serviceId!: string;

  @Column({ type: DataType.STRING })
  public name!: string;

  @Column({ type: DataType.FLOAT })
  public price!: number;

  @Column({ type: DataType.TEXT })
  public description!: string;

  @CreatedAt
  public readonly createdAt!: Date;

  @UpdatedAt
  public readonly updatedAt!: Date;

  @ForeignKey(() => Hospital)
  @Column({ type: DataType.STRING })
  public hospitalId!: string;

  // associate

  @BelongsTo(() => Hospital)
  private hospital!: Hospital
  
  public getHospital(): Hospital {
    return this.hospital
  }

  @BeforeCreate
  static generateID(instance: Service) {
    instance.serviceId = generateUUID()
  }
}