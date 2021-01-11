import {MigrationInterface, QueryRunner} from "typeorm";

export class FooScript1610366012913 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        console.log("up!!!");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        console.log("down!!!");
    }

}
