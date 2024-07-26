import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';


@Injectable()
export class TaskService {
    constructor(
      @InjectRepository(Task) 
    private taskRepository: Repository<Task>,
  ) {}


  async getAllTasks(): Promise<HttpException | Task[]> {
    try {
      const tasks = await this.taskRepository.find();
      return tasks;
    } catch (error) {
      console.log(error);
      
      return new HttpException('INTERNAL SERVER ERROR', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    try {
      const toDo = this.taskRepository.create(createTaskDto);
      return this.taskRepository.save(toDo);
    } catch (error) {
      throw new HttpException('INTERNAL SERVER ERROR', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async deleteTask(id: number): Promise<HttpException | Task> {

    try {
      const task = await this.taskRepository.findOne({
        where: { id: id },
      });
      if (!task) {
        return new HttpException('The taks does not exist', HttpStatus.NOT_FOUND);
      }
      this.taskRepository.delete({ id: id });
      return task;

    } catch (error) {
      return new HttpException('The provided ID parameter is invalid', HttpStatus.BAD_REQUEST);
    }    
  }
}

