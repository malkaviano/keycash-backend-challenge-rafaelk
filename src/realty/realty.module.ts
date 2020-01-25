import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { RealtyService } from './realty.service';
import { RealtyController } from './realty.controller';
import { RealtyRepository } from './realty.repository';

@Module({
  imports: [TypeOrmModule.forFeature([RealtyRepository])],
  providers: [RealtyService],
  controllers: [RealtyController],
})
export class RealtyModule {}
