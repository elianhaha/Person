import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { Person } from './person.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  public async getAll(): Promise<Person[]>{
    return await this.appService.getAll();
  }
  @Get(':id')
  public getById(@Param('id') id:number):Promise<Person>{
    return this.appService.getById(id);
  }
  @Post()
  public createPerson(@Body()post: Person):Promise<Person>{
    return this.appService.createPerson(post);
  }
  @Put(':id')
  public async editPerson(@Param('id')id: number,
                          @Body('name')name:string,
                          @Body('something')something:string):Promise<Person>{
    return await this.appService.updatePerson(id,name,something);
  }
  @Delete(':id')
  public async deletePerson(@Param('id') id: number):Promise<Person>{
    return await this.appService.deletePerson(id);
  }


}
