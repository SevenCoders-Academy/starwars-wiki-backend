import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FilmeModule } from './film';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'sevencoders',
      password: 'sevencoders',
      database: 'starwarswiki',
      entities: [__dirname + '../../**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    FilmeModule,
  ],
})
export class AppModule {}
