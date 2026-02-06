import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern, EventPattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('get-product')
  getUser(id: number) {
    return {id, name: "John Doe", age: 100}
    }
  }
}
