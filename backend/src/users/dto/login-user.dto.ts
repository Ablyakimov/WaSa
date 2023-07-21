import { ApiProperty } from '@nestjs/swagger'

export class LoginUserDto {
  @ApiProperty({
    example: 'user1@gmail.com',
    description: 'Почта пользователя',
  })
  readonly email: string

  @ApiProperty({ example: '123456789', description: 'Пароль пользователя' })
  readonly password: String
}
