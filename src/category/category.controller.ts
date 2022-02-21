import {
    Controller,
    Get,
    Post,
    Body,
    UsePipes,
    ValidationPipe,
    UseGuards,
  } from '@nestjs/common';
  import { CategoryService } from './category.service';
  import { createCategoryDto } from './dto/create-category.dto';
  import { Category } from './category.entity';
  import { AuthGuard } from '@nestjs/passport';
  
  @Controller('categories')
  @UseGuards(AuthGuard())
  export class CategoryController {
    constructor(private categoryService: CategoryService) {}
  
    @Get()
    getCategories(): Promise<Category[]> {
      return this.categoryService.getCategories();
    }
  
    @Post()
    @UsePipes(ValidationPipe)
    createCategory(@Body() createCategoryDto : createCategoryDto,) : Promise<Category> {
      return this.categoryService.createCategory(createCategoryDto);
    }
  }
  