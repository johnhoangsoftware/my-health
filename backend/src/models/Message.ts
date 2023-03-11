import { Model,  PrimaryKey, Column, Table, ForeignKey, CreatedAt, UpdatedAt, DataType, DeletedAt, BelongsTo, BeforeCreate } from 'sequelize-typescript';
import { Chat, User} from '.'
import { generateUUID } from '../utils/uuid';

@Table({ tableName: 'message' })
export class Message extends Model {
  @PrimaryKey
  @Column({ type: DataType.STRING })
  public message_id!: string;

  @Column({ type: DataType.STRING })
  public type?: string;

  @CreatedAt
  public readonly createdAt!: Date;

  @DeletedAt
  public deletedAt?: Date | null;

  @ForeignKey(() => Chat)
  @Column({ type: DataType.STRING })
  public chat_id!: string;

  @ForeignKey(() => User)
  @Column({ type: DataType.STRING })
  public sender_id!: string;

  // associate
  @BelongsTo(() => Chat)
  private chat!: Chat
  
  @BelongsTo(() => User)
  private sender!: User

  public getChat(): Chat {
    return this.chat
  }

  public getSender(): User {
    return this.sender
  }

  @BeforeCreate
  static generateID(instance: Message) {
    instance.message_id = generateUUID()
  }
}