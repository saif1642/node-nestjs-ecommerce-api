import { Repository, EntityRepository } from 'typeorm';
import { Order } from './order.entity';
import { createOrderDto } from './dto/create-order.dto';

@EntityRepository(Order)
export class OrderRepository extends Repository<Order> {
  async getOrders(
    id:number
  ): Promise<Order[]> {
    const orders = await Order.find({where:{user_id: id}});
    return orders;
  }

  async createOrder(createOrderDto: createOrderDto,) : Promise<Order> {
    const { user_id, product_id } = createOrderDto;

    const order = new Order();
    order.user_id = user_id;
    order.product_id = product_id;
    await order.save();

    return order;
  }
}
