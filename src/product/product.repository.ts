import { Repository, EntityRepository } from 'typeorm';
import { Product } from './product.entity';
import { createProductDto } from './dto/create-product.dto';
@EntityRepository(Product)
export class ProductRepository extends Repository<Product> {
  async getProducts(): Promise<Product[]> {
    const products = await Product.find();
    return products;
  }

  async createProduct(createProductDto: createProductDto,) : Promise<Product> {
    const { name, description, image, category_id, price } = createProductDto;

    const product = new Product();
    product.name = name;
    product.image = image;
    product.category_id = category_id;
    product.price = price;
    product.description = description;
    await product.save();

    return product;
  }
}
