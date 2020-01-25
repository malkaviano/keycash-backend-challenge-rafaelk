import { Transform } from 'class-transformer';
import { IsInt, IsNumber, Min, IsOptional } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class RealtySearchDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsInt()
  @Min(1)
  @Transform(value => Number(value))
  bedrooms: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsInt()
  @Min(1)
  @Transform(value => Number(value))
  bathrooms: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsInt()
  @Min(0)
  @Transform(value => Number(value))
  parking: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  @Min(1)
  @Transform(value => Number(value))
  lotSize: number;
}
