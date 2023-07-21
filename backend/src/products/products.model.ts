import { BelongsToMany, Column, DataType, Model, Table } from 'sequelize-typescript'
import { UserProduct } from 'src/users/user-product.model'
import { User } from 'src/users/users.model'

interface ProductCreationAttrs {
  name: string
  description: string
  price: number
  stockCount: number
  salesCount: number
}

@Table({ tableName: 'products', timestamps: false })
export class Product extends Model<Product, ProductCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number

  @Column({
    type: DataType.STRING,
  })
  name: string

  @Column({
    type: DataType.INTEGER,
  })
  price: number

  @Column({
    type: DataType.INTEGER,
  })
  stockCount: number

  @Column({
    type: DataType.INTEGER,
  })
  salesCount: number
  
  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  isDelete: boolean

  @BelongsToMany(() => User, () => UserProduct)
  users: User[]
}
