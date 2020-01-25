import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { RealtyRepository } from './realty.repository';
import { Realty } from '../entities/realty.entity';
import { RealtyDto } from '../dtos/realty.dto';

@Injectable()
export class RealtyService {
  constructor(@InjectRepository(RealtyRepository) private readonly repository: RealtyRepository) {}

  public async getRealtyById(id): Promise<Realty> {
    return this.repository.findOne(id);
  }

  public async searchRealty(
    bedrooms: number,
    bathrooms: number,
    parking: number,
    lotSize: number,
  ): Promise<Realty[]> {
    return this.repository.find({
      where: [
        { bathrooms },
        { bedrooms },
        { parking },
        { lotSize },
      ],
    });
  }

  public async createRealty(realty: Realty): Promise<any> {
    return this.repository.insert(realty);
  }

  public async updateRealty(realty: Realty): Promise<any> {
    return this.repository.update(realty.id, realty);
  }

  public async deleteRealty(id: number): Promise<any> {
    return this.repository.delete(id);
  }
}
