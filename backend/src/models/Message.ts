import { Model,  PrimaryKey, Column, Table, ForeignKey, CreatedAt, UpdatedAt, DataType, DeletedAt, BelongsTo, BeforeCreate } from 'sequelize-typescript';
import { Chat, User} from '.'
import { generateUUID } from '../utils/uuid';

@Table({ tableName: 'Messages' })
export class Message extends Model {
  @PrimaryKey
  @Column({ type: DataType.STRING })
  public messageId!: string;

  @Column({ type: DataType.STRING })
  public type?: string;

  @CreatedAt
  public readonly created_at!: Date;

  @UpdatedAt
  public readonly updatedAt!: Date;

  @ForeignKey(() => Chat)
  @Column({ type: DataType.STRING })
  public chatId!: string;

  @ForeignKey(() => User)
  @Column({ type: DataType.STRING })
  public senderId!: string;

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
    instance.messageId = generateUUID()
  }
}