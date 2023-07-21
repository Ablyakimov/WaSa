import { ApiProperty } from '@nestjs/swagger'
import { BelongsToMany, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript'
import { Product } from 'src/products/products.model'
import { User } from './users.model'

@Table({ tableName: 'user_product', timestamps: false})
export class UserProduct extends Model<UserProduct> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number

  @ForeignKey(() => Product)
  @Column({ type: DataType.INTEGER })
  idProduct: number

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  idUser: number
}
