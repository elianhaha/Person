import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Person } from './person.entity';
import {Repository} from 'typeorm';
import {PersonModel} from './app.model';

@Injectable()
export class AppService {
  constructor(@InjectRepository(Person) private personRepo:Repository<Person>,){}

  public getAll():Promise<Person[]>{
    return this.personRepo.find({
      relations: ['man']
    }); //SELECT * FROM person;
  }

  public async getById(id:number):Promise<Person>{
    try {
      const personId = await this.personRepo.findOneOrFail(id); // SELECT * FROM person WHERE id = id;
      return personId;
      
    } catch (err) {
      throw err.message;
    }
    
  }
  public createPerson(name:Person):Promise<Person>{
      const createPerson = this.personRepo.create(name);
      return this.personRepo.save(createPerson);
  }

  public async updatePerson(id:number,name:string,something:string):Promise<Person>{
    const personUpdate = await this.getById(id);
    personUpdate.name = name;
    personUpdate.something = something;

    return this.personRepo.save(personUpdate);
  }
  public async deletePerson(id:number):Promise<Person>{
    const deleteP = await this.getById(id);
    return this.personRepo.remove(deleteP);
  }

  
}
