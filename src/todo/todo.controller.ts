import { Controller, Param, Query, Body } from '@nestjs/common';
import { Get, Post, Patch } from '@nestjs/common';

import { CreateTodoDto } from './dto/creat-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Controller('todos')
export class TodoController {
  @Get()
  getAll() {
    return [];
  }
  @Get('/examples')
  getExample() {
    return [
      {
        id: 1,
        title: 'Example 1',
        description: '',
      },
    ];
  }
  @Get('/examples/:id')
  getExampleId(@Param('id') id: string) {
    return [
      {
        id: 1,
        title: `Example 1 ${id}`,
        description: '',
      },
    ];
  }
  @Get('get-list')
  getList(@Query() query: { limit: number; skip: number }) {
    const { limit = 30, skip = 0 } = query;
    const list = [
      {
        id: 1,
        title: 'Title 1',
        description: '',
      },
      {
        id: 2,
        title: 'Title 2',
        description: '',
      },
    ];

    return list.slice(skip, limit);
  }
  @Post()
  async create(@Body() createTodoDto: CreateTodoDto) {
    console.log(createTodoDto);
    return createTodoDto;
  }

  @Patch()
  async update(@Body() updateTodoDto: UpdateTodoDto) {
    console.log(updateTodoDto);
    return updateTodoDto;
  }
}
