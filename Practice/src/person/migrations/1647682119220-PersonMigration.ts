import {MigrationInterface, QueryRunner} from "typeorm";

export class PersonMigration1647682119220 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("INSERT INTO person(id,name,something) VALUES(9 ,'Papa' , 'Ganteng' );")
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DELETE FROM person;");
    }

}
