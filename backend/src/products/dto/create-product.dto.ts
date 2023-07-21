import { ApiProperty } from '@nestjs/swagger'

export class CreateProductDto {
  @ApiProperty({
    example: 'iphone 13 pro',
    description: 'Название товара',
  })
  readonly name: string

  @ApiProperty({
    example: 12344,
    description: 'Цена товара',
  })
  readonly price: number

  @ApiProperty({
    example: 12,
    description: 'Количество товаров на складе',
  })
  readonly stockCount: number

  @ApiProperty({
    example: 20,
    description: 'Количество проданных товаров',
  })
  readonly salesCount: number
}
