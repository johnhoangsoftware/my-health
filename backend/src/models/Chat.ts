import { Model,  PrimaryKey, Column, Table, ForeignKey, CreatedAt, UpdatedAt, DataType, BelongsTo, BeforeCreate } from 'sequelize-typescript';
import { generateUUID } from '../utils/uuid';
import { User } from './User';

@Table({ tableName: 'chat' })
export class Chat extends Model {
  @PrimaryKey
  @Column({ type: DataType.STRING })
  public chat_id!: string;

  @CreatedAt
  public readonly created_at!: Date;

  @UpdatedAt
  public readonly updated_at!: Date;

  @Column({ type: DataType.STRING })
  @ForeignKey(() => User)
  public member_one!: string;
  
  @ForeignKey(() => User)
  @Column({ type: DataType.STRING })
  public member_two!: string;

  // association
  @BelongsTo(() => User)
  private memberOne!: User

  @BelongsTo(() => User)
  private memberTwo!: User

  public getMembers(): User[] {
    return [this.memberOne, this.memberTwo]
  }

  @BeforeCreate
  static generateID(instance: Chat) {
    instance.chat_id = generateUUID()
  }
}