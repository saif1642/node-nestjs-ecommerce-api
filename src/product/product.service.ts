import { Injectable } from '@nestjs/common';
import { createProductDto } from './dto/create-product.dto';
import { ProductRepository } from './product.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductRepository)
    private productRepository: ProductRepository,
  ) {}

  async getProducts() {
    return this.productRepository.getProducts();
  }


  async createProduct(createProductDto : createProductDto,) : Promise<Product> {
    return this.productRepository.createProduct(createProductDto);
  }
}
