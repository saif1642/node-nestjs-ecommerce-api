import { Injectable } from '@nestjs/common';
import { createOrderDto } from './dto/create-order.dto';
import { OrderRepository } from './order.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from './order.entity';
import { User } from '../auth/user.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(OrderRepository)
    private orderRepository: OrderRepository,
  ) {}

  async getOrders(
      id: number
  ) {
    return this.orderRepository.getOrders(id);
  }


  async createOrder(createOrderDto : createOrderDto,) : Promise<Order> {
    return this.orderRepository.createOrder(createOrderDto);
  }
}
