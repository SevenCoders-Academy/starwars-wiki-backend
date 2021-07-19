import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Olá SevenCoders, este é o back-end do StarWars Wiki!!';
  }
}
