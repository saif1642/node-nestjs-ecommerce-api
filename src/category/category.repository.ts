import { Repository, EntityRepository } from 'typeorm';
import { Category } from './category.entity';
import { createCategoryDto } from './dto/create-category.dto';
@EntityRepository(Category)
export class CategoryRepository extends Repository<Category> {
  async getCategories(): Promise<Category[]> {
    
    const categories = await Category.find();
    return categories;
  }

  async createCategory(createCategoryDto: createCategoryDto,) : Promise<Category> {
    const { name, description } = createCategoryDto;

    const category = new Category();
    category.name = name;
    category.description = description;
    await category.save();

    return category;
  }
}
