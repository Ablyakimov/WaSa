import { Injectable } from '@nestjs/common'
import { User } from './users.model'
import { InjectModel } from '@nestjs/sequelize'
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto'

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userRepository: typeof User) {}

  async createUser(dto: CreateUserDto) {
    const salt = await bcrypt.genSalt();
    const password = dto.password;
    const hash = await bcrypt.hash(password, salt);

    const createUser = {...dto, password: hash}

    const user = await this.userRepository.create(createUser)
    return user
  }

  async getAllUsers() {
    const users = await this.userRepository.findAll({ include: { all: true } })

    return users
  }

  async getUserByEmail(email: string) {
    const user = await this.userRepository.findOne({
      where: { email },
      include: { all: true },
    })
    return user
  }

  async getMe() {
    
  }
}
