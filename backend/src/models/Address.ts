import { Model,  PrimaryKey, Column, Table, ForeignKey, CreatedAt, UpdatedAt, DataType, DeletedAt } from 'sequelize-typescript';

@Table({ tableName: 'address' })
export class Address extends Model{
  @PrimaryKey
  @Column({
    type: DataType.STRING,
    field: 'address_id'
  })
  public address_id!: string;

  @Column({
    type: DataType.STRING,
    field: 'city'
  })
  public city!: string;

  @CreatedAt
  public readonly createdAt!: Date;

  @UpdatedAt
  public readonly updatedAt!: Date;
}