import {
    Controller,
    Get,
    Post,
    Body,
    UsePipes,
    ValidationPipe,
    UseGuards,
    Param,
    ParseIntPipe,
  } from '@nestjs/common';
  import { OrderService } from './order.service';
  import { createOrderDto } from './dto/create-order.dto';
  import { Order } from './order.entity';
  import { AuthGuard } from '@nestjs/passport';
import { User } from '../auth/user.entity';
  
  @Controller('orders')
  @UseGuards(AuthGuard())
  export class OrderController {
    constructor(private orderService: OrderService) {}
  
    @Get('/:id')
    getOrders(
        @Param('id', ParseIntPipe) id: number,
    ): Promise<Order[]> {
      return this.orderService.getOrders(id);
    }
  
    @Post()
    @UsePipes(ValidationPipe)
    createOrder(@Body() createOrderDto : createOrderDto) : Promise<Order> {
      return this.orderService.createOrder(createOrderDto);
    }
  }
  