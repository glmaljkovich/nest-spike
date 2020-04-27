import { Controller, Post, Get, Param, Body } from '@nestjs/common';
import { UserService } from './user.service'
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post()
  async create(@Body() userData){
    return await this.userService.create(userData)
  }
  @Get()
  async getAll(){
    return await this.userService.findAll()
  }
  @Get(":id")
  async getOne(@Param() params){
    return await this.userService.findOne(params.id)
  }
}
