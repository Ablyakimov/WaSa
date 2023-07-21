import { ApiProperty } from '@nestjs/swagger'

export class CreateUserDto {
  @ApiProperty({
    example: 'user1@gmail.com',
    description: 'Почта пользователя',
  })
  readonly email: string

  @ApiProperty({ example: '123456789', description: 'Пароль пользователя' })
  readonly password: string

  @ApiProperty({ example: 'Продавец', description: 'Должность' })
  readonly position: string

  @ApiProperty({ example: 'Вася Пупкин', description: 'Имя' })
  readonly name: string
}
