import { ApiProperty } from '@nestjs/swagger'
import { BelongsToMany, Column, DataType, Model, Table } from 'sequelize-typescript'
import { Product } from 'src/products/products.model'
import { UserProduct } from './user-product.model'

interface UserCreationAttrs {
  email: string
  password: string
}

@Table({ tableName: 'users', timestamps: false})
export class User extends Model<User, UserCreationAttrs> {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number

  @ApiProperty({
    example: 'user1@gmail.com',
    description: 'Почта пользователя',
  })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  email: string

  @ApiProperty({ example: '1q2w3e4r5t', description: 'Пароль пользователя' })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  password: string

  @ApiProperty({ example: 'Продавец', description: 'Должность' })
  @Column({ type: DataType.STRING, allowNull: false })
  position: string

  @ApiProperty({ example: 'Вася Пупкин', description: 'Имя' })
  @Column({ type: DataType.STRING, allowNull: false })
  name: string

  @BelongsToMany(() => Product, () => UserProduct)
  products: Product[]
}
