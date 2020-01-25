import { Transform } from 'class-transformer';
import { IsInt, IsNumber, Min, Length } from 'class-validator';

export class RealtyDto {
  @Length(5, 50)
  name: string;

  @Length(1, 50)
  register: string;

  @IsInt()
  @Min(1)
  @Transform(value => Number(value))
  bedrooms: number;

  @IsInt()
  @Min(1)
  @Transform(value => Number(value))
  bathrooms: number;

  @IsInt()
  @Min(0)
  @Transform(value => Number(value))
  parking: number;

  @IsNumber()
  @Min(1)
  @Transform(value => Number(value))
  lotSize: number;
}
