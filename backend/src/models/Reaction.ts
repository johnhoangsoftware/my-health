import { Model,  PrimaryKey, Column, Table, ForeignKey, CreatedAt, UpdatedAt, DataType, DeletedAt, BelongsTo, BeforeCreate } from 'sequelize-typescript';
import {User, Comment} from '.'
import { generateUUID } from '../utils/uuid';

@Table({ tableName: 'reaction' })
export class Reaction extends Model{
  @PrimaryKey
  @Column({ type: DataType.STRING })
  public reaction_id!: string;

  @CreatedAt
  public readonly created_at!: Date;

  @ForeignKey(() => User)
  @Column({ type: DataType.STRING })
  public auth_id!: string;

  @ForeignKey(() => Comment)
  @Column({ type: DataType.STRING })
  public comment_id!: string;

  // associate

  @BelongsTo(() => User)
  private auth!: User

  @BelongsTo(() => Comment)
  private comment!: Comment

  public getAuth(): User {
    return this.auth
  }

  public getComment(): Comment {
    return this.comment
  }

  @BeforeCreate
  static generateID(instance: Reaction) {
    instance.reaction_id = generateUUID()
  }
}