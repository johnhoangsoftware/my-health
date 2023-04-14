import { Model,  PrimaryKey, Column, Table, ForeignKey, CreatedAt, UpdatedAt, DataType, DeletedAt, BelongsTo, HasMany, BeforeCreate } from 'sequelize-typescript';
import {User, Post, Reaction} from '.'
import { generateUUID } from '../utils/uuid';

@Table({ tableName: 'comment' })
export class Comment extends Model{
  @PrimaryKey
  @Column({ type: DataType.STRING })
  public comment_id!: string;

  @Column({ type: DataType.TEXT })
  public content!: string;

  @CreatedAt
  public readonly created_at!: Date;

  @UpdatedAt
  public readonly updated_at!: Date;

  @ForeignKey(() => User)
  @Column({ type: DataType.STRING })
  public auth_id!: string;

  @ForeignKey(() => Post)
  @Column({ type: DataType.STRING })
  public post_id!: string;

  // association
  @BelongsTo(() => User)
  private auth!: User

  @BelongsTo(() => Post)
  private post!: Post

  @HasMany(() => Reaction)
  private reactions!: Reaction[]

  public getAuth(): User {
    return this.auth
  }

  public getPost(): Post {
    return this.post
  }

  public getReactions(): Reaction[] {
    return this.reactions
  }

  @BeforeCreate
  static generateID(instance: Comment) {
    instance.comment_id = generateUUID()
  }
}