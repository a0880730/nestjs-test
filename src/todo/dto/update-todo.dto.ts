import { PartialType } from '@nestjs/mapped-types';
import { CreateTodoDto } from './creat-todo.dto';

export class UpdateTodoDto extends PartialType(CreateTodoDto) {}
