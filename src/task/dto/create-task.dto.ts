import { Expose, Type } from 'class-transformer';
import { IsDate, IsEnum, IsNumber, IsString, MaxLength,  MinLength } from 'class-validator';
import { TaskStatus } from '../entities/task.entity';


export class CreateTaskDto {


    @Expose()
    @IsString()
    @MinLength(3)
    @MaxLength(30)
    title: string;
    
    @Expose()
    @IsString()
    @MinLength(5)
    @MaxLength(60)
    description: string;


    @IsEnum(TaskStatus)
    status: TaskStatus; 

}
