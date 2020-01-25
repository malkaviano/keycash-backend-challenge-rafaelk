import { Body, Query, Controller, Get, Param, Post, NotFoundException, BadRequestException, Patch, Delete } from '@nestjs/common';

import { RealtyService } from './realty.service';
import { Realty } from '../entities/realty.entity';
import { RealtyDto} from '../dtos/realty.dto';
import { RealtySearchDto } from '../dtos/realty-search.dto';

@Controller('realty')
export class RealtyController {
  constructor(private readonly service: RealtyService) {}

  @Get('search')
  public async findRealty(@Query() input: RealtySearchDto): Promise<Realty[]> {
    try {
      const result = await this.service.searchRealty(
        input.bedrooms,
        input.bathrooms,
        input.parking,
        input.lotSize,
      );

      if (result === undefined) {
        throw new NotFoundException('Imóvel não encontrado');
      }

      return result;
    } catch (error) {
      throw new BadRequestException(error.message);
    }

  }

  @Get('find/:id')
  public async getRealtyById(@Param('id') id: number): Promise<Realty> {
    try {
      const result = await this.service.getRealtyById(id);

      if (result === undefined) {
        throw new NotFoundException('Imóvel não encontrado');
      }

      return result;
    } catch (error) {
      throw new BadRequestException(error.message);
    }

  }

  @Post('create')
  public async createRealty(@Body() realtyDto: RealtyDto): Promise<any> {
    try {
      const realty = new Realty();

      realty.bathrooms = realtyDto.bathrooms;
      realty.bedrooms = realtyDto.bedrooms;
      realty.lotSize = realtyDto.lotSize;
      realty.name = realtyDto.name;
      realty.parking = realtyDto.parking;
      realty.register = realtyDto.register;

      return await this.service.createRealty(realty);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Patch('patch/:id')
  public async updateRealty(
    @Param('id') id: number,
    @Body() realtyDto: RealtyDto,
  ): Promise<any> {
    try {
      const realty = new Realty();

      realty.id = id;
      realty.bathrooms = realtyDto.bathrooms;
      realty.bedrooms = realtyDto.bedrooms;
      realty.lotSize = realtyDto.lotSize;
      realty.name = realtyDto.name;
      realty.parking = realtyDto.parking;
      realty.register = realtyDto.register;

      return await this.service.updateRealty(realty);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Delete('delete/:id')
  public async deleteRealty(
    @Param('id') id: number,
  ): Promise<any> {
    try {
      return await this.service.deleteRealty(id);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
