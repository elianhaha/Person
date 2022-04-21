import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import {Man} from './man.entity'

@Entity()
export class Person{
    @PrimaryGeneratedColumn()
    public id:number;
    @Column()
    public name:string;
    @Column()
    public something:string;
    @OneToMany(type => Man,man=>man.owner)
    public man:Man[]
}