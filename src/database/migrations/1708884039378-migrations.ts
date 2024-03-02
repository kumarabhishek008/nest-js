import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1708884039378 implements MigrationInterface {
    name = 'Migrations1708884039378'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`state\` varchar(255) NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`state\``);
    }

}
