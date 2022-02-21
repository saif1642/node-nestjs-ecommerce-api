import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from '../auth/user.entity';
import { Product } from '../product/product.entity';
import { Order } from '../order/order.entity';
import { Category } from '../category/category.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'saifdev',
  password: '123456789',
  database: 'postgres',
  entities: [User,Product,Order,Category],
  synchronize: true,
};
