import { Model,  PrimaryKey, Column, Table, ForeignKey, CreatedAt, UpdatedAt, DataType, BelongsTo, HasMany, BeforeCreate } from 'sequelize-typescript';

import {Department, Chat, Post, Appointment} from '.'
import { generateUUID } from '../utils/uuid';

@Table({ tableName: 'Users' })
export class User extends Model{
  @PrimaryKey
  @Column({ type: DataType.STRING })
  public userId!: string;

  @Column({ type: DataType.STRING })
  public email!: string;

  @Column({ type: DataType.STRING })
  public password!: string;

  @Column({ type: DataType.STRING })
  public firstName?: string;

  @Column({ type: DataType.STRING })
  public lastName?: string;

  @Column({ type: DataType.INTEGER })
  public birthDay?: Date;

  @Column({ type: DataType.STRING })
  public avatar?: string;

  @Column({ type: DataType.STRING })
  public phone?: string;

  @Column({ type: DataType.ENUM("PATIENT", "DOCTOR") })
  public role!: "PATIENT" | "DOCTOR";
  
  @CreatedAt
  public created_at?: Date;

  @UpdatedAt
  public updated_at?: Date;

  @ForeignKey(() => Department)
  @Column({ type: DataType.STRING })
  public departmentId?: string;

  @Column({ type: DataType.STRING })
  public address?: string;

  // associate

  @BelongsTo(() => Department)
  private department!: Department
  
  @HasMany(() => Chat)
  private chats!: Chat[]

  @HasMany(() => Post)
  private posts!: Post[]

  @HasMany(() => Appointment)
  private appointments!: Appointment[]

  public getDepartment(): Department {
    return this.department
  }

  public getAllChats(): Chat[] {
    return this.chats
  }

  public getAllPosts(): Post[] {
    return this.posts
  }

  public getAllAppointments(): Appointment[] {
    return this.appointments
  }

  @BeforeCreate
  static generateID(instance: User) {
    instance.userId = generateUUID()
  }
}