import { Model,  PrimaryKey, Column, Table, ForeignKey, CreatedAt, UpdatedAt, DataType, DeletedAt, BelongsTo, HasMany, BeforeCreate } from 'sequelize-typescript';
import {User, Post, Reaction} from '.'
import { generateUUID } from '../utils/uuid';

@Table({ tableName: 'Comments' })
export class Comment extends Model{
  @PrimaryKey
  @Column({ type: DataType.STRING })
  public commentId!: string;

  @Column({ type: DataType.TEXT })
  public content!: string;

  @CreatedAt
  public readonly createdAt!: Date;

  @UpdatedAt
  public readonly updatedAt!: Date;

  @ForeignKey(() => User)
  @Column({ type: DataType.STRING })
  public authId!: string;

  @ForeignKey(() => Post)
  @Column({ type: DataType.STRING })
  public postId!: string;

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
    instance.commentId = generateUUID()
  }
}