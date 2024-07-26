import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskModule } from './task/task.module';
import { Task } from './task/entities/task.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'to_do_list',
      entities: [__dirname + "/**/*.entity{.ts,.js}"],
      synchronize: true, 
    }),
    TaskModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
