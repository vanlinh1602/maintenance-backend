import { Inject, Injectable } from '@nestjs/common';
import { Liquidation } from 'src/database/models/liquidations.entity';
import { ILiquidation } from 'src/database/types/liquidation';

import { ILiquidationService } from '../interfaces/liquidation.service.interface';

@Injectable()
export class LiquidationService implements ILiquidationService {
  constructor(
    @Inject('LIQUIDATION_REPOSITORY')
    private liquidationRepository: typeof Liquidation,
  ) {}

  async getLiquidation(id: string): Promise<Liquidation> {
    return this.liquidationRepository.findOne({
      where: {
        id,
      },
    });
  }

  async getLiquidationByFilter(
    filter: Partial<ILiquidation>,
  ): Promise<Liquidation[]> {
    return this.liquidationRepository.findAll({
      where: filter,
    });
  }

  async getLiquidations(): Promise<Liquidation[]> {
    return this.liquidationRepository.findAll();
  }

  async createLiquidation(
    liquidation: Partial<ILiquidation>,
  ): Promise<Liquidation> {
    return this.liquidationRepository.create(liquidation);
  }

  async updateLiquidation(
    id: string,
    liquidation: Partial<Liquidation>,
  ): Promise<boolean> {
    const updated = await this.liquidationRepository.update(liquidation, {
      where: {
        id,
      },
    });
    return updated[0] > 0;
  }

  async deleteLiquidation(liquidationId: string): Promise<boolean> {
    const deleted = await this.liquidationRepository.destroy({
      where: {
        id: liquidationId,
      },
    });
    return deleted > 0;
  }
}
