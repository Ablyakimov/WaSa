import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { Product } from './products.model'
import { CreateProductDto } from './dto/create-product.dto'
import { User } from 'src/users/users.model'

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product) private productRepository: typeof Product,
    @InjectModel(User) private userRepository: typeof User,
  ) {}

  async addProduct(productDto: CreateProductDto) {
    return this.productRepository.create(productDto)
  }

  async getAllProduct() {
    return this.productRepository.findAll({where: {isDelete: false}})
  }

  async deleteProduct(id: number) {
    const product = await this.productRepository.findOne({where: {id}})
    product.isDelete = true
    await product.save()
    
    return product.id
  }

  async sellProduct(idProduct: number, idUser: number) {
    const product = await this.productRepository.findOne({where: {id: idProduct}})
    const user = await this.userRepository.findOne({where: {id: idUser}})

    await user.$add('products', product.id)

    return product
  }
}
