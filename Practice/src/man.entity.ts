import {Person} from './person.entity';
import {Entity, PrimaryGeneratedColumn,Column,ManyToOne} from 'typeorm';


@Entity()
export class Man{
    @PrimaryGeneratedColumn()
    id:number 
    @Column()
    name:string
    @ManyToOne(type=>Person,person => person.man)
    owner:Person
}
