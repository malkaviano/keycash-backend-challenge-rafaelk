import {MigrationInterface, QueryRunner} from 'typeorm';

export class CreateRealty1579977686032 implements MigrationInterface {
    name = 'CreateRealty1579977686032';

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "realty" ("id" BIGSERIAL NOT NULL, "register" character varying(50) NOT NULL, "name" character varying(50) NOT NULL, "bedrooms" integer NOT NULL, "bathrooms" integer NOT NULL, "parking" integer NOT NULL, "lotSize" real NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_4a4ff9d6682f76662372b5b9593" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_e8004c8c5c2b1234c3ceff633b" ON "realty" ("register") `, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP INDEX "IDX_e8004c8c5c2b1234c3ceff633b"`, undefined);
        await queryRunner.query(`DROP TABLE "realty"`, undefined);
    }

}
