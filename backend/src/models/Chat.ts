import { Model,  PrimaryKey, Column, Table, ForeignKey, CreatedAt, UpdatedAt, DataType, BelongsTo, BeforeCreate, HasMany } from 'sequelize-typescript';
import { generateUUID } from '../utils/uuid';
import { User } from './User';
import { Message } from './Message';

@Table({ tableName: 'Chats' })
export class Chat extends Model {
  @PrimaryKey
  @Column({ type: DataType.STRING })
  public chatId!: string;

  @PrimaryKey
  @Column({ type: DataType.STRING })
  @ForeignKey(() => User)
  public userId!: string;
  
  @CreatedAt
  public readonly createdAt!: Date;

  @UpdatedAt
  public readonly updatedAt!: Date;

  // association
  @HasMany(() => Message)
  private messages!: Message[]

  public getMessages() {
    return this.messages
  }

  @BeforeCreate
  static generateID(instance: Chat) {
    if (!instance.chatId) {
      instance.chatId = generateUUID()
    }
  }
}