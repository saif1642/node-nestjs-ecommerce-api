import {
    Controller,
    Get,
    Post,
    Body,
    UsePipes,
    ValidationPipe,
    UseGuards,
  } from '@nestjs/common';
  import { ProductService } from './product.service';
  import { createProductDto } from './dto/create-product.dto';
  import { Product } from './product.entity';
  import { AuthGuard } from '@nestjs/passport';
  
  @Controller('products')
  @UseGuards(AuthGuard())
  export class ProductController {
    constructor(private productService: ProductService) {}
  
    @Get()
    getProducts(): Promise<Product[]> {
      return this.productService.getProducts();
    }
  
    @Post()
    @UsePipes(ValidationPipe)
    createProducts(@Body() createProductDto : createProductDto) : Promise<Product> {
      return this.productService.createProduct(createProductDto);
    }
  }
  