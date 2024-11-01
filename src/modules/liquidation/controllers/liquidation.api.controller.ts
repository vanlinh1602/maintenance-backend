import { Body, Controller, Get, Post } from '@nestjs/common';
import { ILiquidation } from 'src/database/types/liquidation';

import { LiquidationService } from '../services/liquidation.service';

@Controller()
export class LiquidationApiController {
  constructor(private readonly liquidationServices: LiquidationService) {}

  @Get('/get/all')
  async getLiquidations(): Promise<ILiquidation[]> {
    const liquidations = await this.liquidationServices.getLiquidations();
    return liquidations.map((liquidation) => liquidation.dataValues);
  }

  @Post('/get')
  async getLiquidationByFilter(
    @Body() filter: Partial<ILiquidation>,
  ): Promise<ILiquidation[]> {
    const liquidation =
      await this.liquidationServices.getLiquidationByFilter(filter);
    return liquidation.map((req) => req.dataValues);
  }

  @Post('/create')
  async createLiquidation(
    @Body() data: { liquidation: Partial<ILiquidation> },
  ): Promise<ILiquidation> {
    const newLiquidation = await this.liquidationServices.createLiquidation(
      data.liquidation,
    );
    return newLiquidation.dataValues;
  }

  @Post('/update')
  async updateLiquidation(
    @Body() data: { id: string; liquidation: ILiquidation },
  ): Promise<{ success: boolean }> {
    const success = await this.liquidationServices.updateLiquidation(
      data.id,
      data.liquidation,
    );
    return { success };
  }

  @Post('/delete')
  async deleteLiquidation(
    @Body() data: { id: string },
  ): Promise<{ success: boolean }> {
    const success = await this.liquidationServices.deleteLiquidation(data.id);
    return { success };
  }
}
