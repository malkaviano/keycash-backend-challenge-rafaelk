import { Transform } from 'class-transformer';
import { IsInt, IsNumber, Min, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RealtyDto {
  @ApiProperty()
  @Length(5, 50)
  name: string;

  @ApiProperty()
  @Length(1, 50)
  register: string;

  @ApiProperty()
  @IsInt()
  @Min(1)
  @Transform(value => Number(value))
  bedrooms: number;

  @ApiProperty()
  @IsInt()
  @Min(1)
  @Transform(value => Number(value))
  bathrooms: number;

  @ApiProperty()
  @IsInt()
  @Min(0)
  @Transform(value => Number(value))
  parking: number;

  @ApiProperty()
  @IsNumber()
  @Min(1)
  @Transform(value => Number(value))
  lotSize: number;
}
