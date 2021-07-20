import { Module } from '@nestjs/common';
import { config } from 'dotenv';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FilmeModule } from './film';
import { CharacterModule } from './character';

config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: String(process.env.DB_HOST),
      port: Number(process.env.DB_PORT),
      username: String(process.env.DB_USER),
      password: String(process.env.DB_PASS),
      database: String(process.env.DB_NAME),
      entities: [__dirname + '../../**/*.entity{.ts,.js}'],
      synchronize: true,
      logging: true,
    }),
    FilmeModule,
    CharacterModule,
  ],
})
export class AppModule {}
