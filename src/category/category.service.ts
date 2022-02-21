import { Injectable } from '@nestjs/common';
import { createCategoryDto } from './dto/create-category.dto';
import { CategoryRepository } from './category.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './category.entity';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(CategoryRepository)
    private categoryRepository: CategoryRepository,
  ) {}

  async getCategories() {
    return this.categoryRepository.getCategories();
  }


  async createCategory(createCategoryDto : createCategoryDto,) : Promise<Category> {
    return this.categoryRepository.createCategory(createCategoryDto);
  }
}
