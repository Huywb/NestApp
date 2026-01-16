import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAllUser(){
    return this.userService.findAllUser()
  }

  @Post()
  updateData(@Body() data: [], @Param() id: string){
    return this.userService.updateUser(id,data)
  }

  @Delete()
  deleteData(@Param() id : string){
    return this.deleteData(id)
  }
}
