import { Model,  PrimaryKey, Column, Table, CreatedAt, UpdatedAt, DataType, BelongsTo, HasMany, BeforeCreate, HasOne } from 'sequelize-typescript';

import { Chat, Post, Appointment, Doctor, Patient} from '.'
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
  public createdAt?: Date;

  @UpdatedAt
  public updatedAt?: Date;

  @Column({ type: DataType.STRING })
  public address?: string;

  // associate
  
  @HasMany(() => Chat)
  private chats!: Chat[]

  @HasMany(() => Post)
  private posts!: Post[]

  @HasOne(() => Doctor)
  private doctor!: Doctor
  
  @HasOne(() => Patient)
    private patient!: Patient

  @HasMany(() => Appointment)
  private appointments!: Appointment[]

  public getAllChats(): Chat[] {
    return this.chats
  }

  public getAllPosts(): Post[] {
    return this.posts
  }

  public getAllAppointments(): Appointment[] {
    return this.appointments
  }

  public getDoctor() {
    return this.doctor
  }

  public getPatient() {
    return this.patient
  }

  @BeforeCreate
  static generateID(instance: User) {
    instance.userId = generateUUID()
  }
}