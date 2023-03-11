import { Model,  PrimaryKey, Column, Table, ForeignKey, CreatedAt, UpdatedAt, DataType, BeforeCreate } from 'sequelize-typescript';
import {User} from '.'
import { generateUUID } from '../utils/uuid';

@Table({ tableName: 'notification' })
export class Notification extends Model{
  @PrimaryKey
  @Column({ type: DataType.STRING })
  public notification_id!: string;

  @Column({ type: DataType.STRING })
  public content!: string;

  @Column({ type: DataType.STRING })
  public link!: string;

  @Column({ type: DataType.BOOLEAN })
  public isRead!: boolean;

  @CreatedAt
  public createdAt?: Date;

  @UpdatedAt
  public updatedAt?: Date;

  @ForeignKey(() => User)
  @Column({ type: DataType.STRING })
  public user_id!: string;

  @BeforeCreate
  static generateID(instance: Notification) {
    instance.notification_id = generateUUID()
  }
}