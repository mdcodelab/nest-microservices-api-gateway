import { Controller, Post, Body, Get, Param, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { MICROSERVICES_CLIENT } from './constant';

@Controller()
export class AppController {
  constructor(
    @Inject(MICROSERVICES_CLIENT.ORDER_SERVICE) private readonly orderClient: ClientProxy,
    @Inject(MICROSERVICES_CLIENT.PRODUCT_SERVICE) private readonly productClient: ClientProxy,
    @Inject(MICROSERVICES_CLIENT.USER_SERVICE) private readonly userClient: ClientProxy,
  ) {}

  @Post('orders')
  async createOrder(@Body() order: any) {
    return this.orderClient.send('create-order', order);
  }

  @Get('orders/:id')
  async getOrder(@Param('id') id: string) {
    return this.orderClient.send('get-order', { orderId: id });
  }

  @Get('products/:id')
  async getProduct(@Param('id') id: string) {
    return this.productClient.send('get-product', +id);
  }
}
