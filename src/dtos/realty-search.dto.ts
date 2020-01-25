import { Transform } from 'class-transformer';
import { IsInt, IsNumber, Min, IsOptional } from 'class-validator';

export class RealtySearchDto {

  @IsOptional()
  @IsInt()
  @Min(1)
  @Transform(value => Number(value))
  bedrooms: number;

  @IsOptional()
  @IsInt()
  @Min(1)
  @Transform(value => Number(value))
  bathrooms: number;

  @IsOptional()
  @IsInt()
  @Min(0)
  @Transform(value => Number(value))
  parking: number;

  @IsOptional()
  @IsNumber()
  @Min(1)
  @Transform(value => Number(value))
  lotSize: number;
}
