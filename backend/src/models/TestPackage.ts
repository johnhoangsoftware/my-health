import { Model,  PrimaryKey, Column, Table, ForeignKey, CreatedAt, UpdatedAt, DataType, DeletedAt, BelongsTo, BeforeCreate } from 'sequelize-typescript';
import { Hospital } from '.';
import { generateUUID } from '../utils/uuid';

@Table({ tableName: 'TestPackages' })
export class TestPackage extends Model {
  @PrimaryKey
  @Column({ type: DataType.STRING })
  public testPackageId!: string;

  @Column({ type: DataType.STRING })
  public name!: string;

  @Column({ type: DataType.FLOAT })
  public price!: string;

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
  static generateID(instance: TestPackage) {
    instance.testPackageId = generateUUID()
  }
}