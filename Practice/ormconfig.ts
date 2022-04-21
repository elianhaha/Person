import { ConnectionOptions } from "typeorm";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";


const config: ConnectionOptions={
    type:'postgres',
    database: 'person',
    username:'postgres',
    password:'kejengemas99',
    entities:['dist/src/**/*.entity.js'],
    synchronize:true,
    migrations:['dist/src/person/migrations/*.js'],
    cli:{migrationsDir:'src/person/migrations'}
}
export default config;