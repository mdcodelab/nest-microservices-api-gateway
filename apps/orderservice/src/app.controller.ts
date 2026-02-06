import { Controller, Logger } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern, EventPattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  private readonly logger = new Logger(AppController.name);

  constructor(private readonly appService: AppService) {}

  @MessagePattern('create-order')
  async createOrder(data: any) {
    // In a real application, you would validate and process the order data here
    // For now, we'll just return a success message
    this.logger.log(`Creating order: ${JSON.stringify(data)}`);
    
    // This is a placeholder for actual order creation logic
    const order = {
      id: Date.now(), // Simple ID generation for demo purposes
      ...data,
      status: 'created',
      createdAt: new Date().toISOString(),
    };
    
    return { message: 'Order created successfully', order };
  }

  @MessagePattern('get-order')
  async getOrder(data: { orderId: string }) {
    this.logger.log(`Getting order: ${data.orderId}`);
    
    // Placeholder for actual order retrieval logic
    const result = { message: 'Order retrieved successfully', order: { id: data.orderId, status: 'processing' } };
    this.logger.log(result.message);
    return result;
  }

  @EventPattern('order-updated')
  async handleOrderUpdated(data: any) {
    this.logger.log(`Order updated event received: ${JSON.stringify(data)}`);
  }
}
