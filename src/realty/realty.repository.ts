import { EntityRepository, Repository } from 'typeorm';

import { Realty } from '../entities/realty.entity';

@EntityRepository(Realty)
export class RealtyRepository extends Repository<Realty> {}
