import { Module } from '@nestjs/common'
import { ProductsController } from './products.controller'
import { ProductsService } from './products.service'
import { SequelizeModule } from '@nestjs/sequelize'
import { Product } from './products.model'
import { User } from 'src/users/users.model'
import { UserProduct } from 'src/users/user-product.model'

@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
  imports: [SequelizeModule.forFeature([Product, User, UserProduct])],
})
export class ProductsModule {}
