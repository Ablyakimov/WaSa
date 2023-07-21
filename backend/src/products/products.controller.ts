import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common'
import { ProductsService } from './products.service'
import { ApiTags } from '@nestjs/swagger'
import { CreateProductDto } from './dto/create-product.dto'

interface IsellProduct {
  idProduct: number
  idUser: number
}

@ApiTags('Продукты')
@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) {}

  @Post()
  addProduct(@Body() productDto: CreateProductDto) {
    return this.productService.addProduct(productDto)
  }

  @Post('/sell')
  sellProduct(@Body() sellProductDto: IsellProduct) {
    return this.productService.sellProduct(sellProductDto.idProduct, sellProductDto.idUser)
  }

  @Get()
  getAllProducts() {
    return this.productService.getAllProduct()
  }

  @Delete('/:id')
  deleteProduct(@Param('id') id: number) {
    return this.productService.deleteProduct(id)
  }
}
