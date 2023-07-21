import { Module, forwardRef } from '@nestjs/common'
import { UsersService } from './users.service'
import { UsersController } from './users.controller'
import { SequelizeModule } from '@nestjs/sequelize'
import { User } from './users.model'
import { AuthModule } from 'src/auth/auth.module'
import { Product } from 'src/products/products.model'
import { UserProduct } from './user-product.model'

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [SequelizeModule.forFeature([User, Product, UserProduct]), forwardRef(() => AuthModule)],
  exports: [UsersService],
})
export class UsersModule {}
