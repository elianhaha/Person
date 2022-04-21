import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import config from '../ormconfig';
import { Person } from './person.entity';

@Module({
  imports: [TypeOrmModule.forRoot(config),TypeOrmModule.forFeature([Person])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
