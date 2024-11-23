import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ILiquidation } from 'src/database/types/liquidation';

import { LiquidationService } from '../services/liquidation.service';

@Controller()
export class LiquidationApiController {
  constructor(private readonly liquidationServices: LiquidationService) {}

  @Get('/')
  async getLiquidationByFilter(
    @Query() filter: Partial<ILiquidation>,
  ): Promise<ILiquidation[]> {
    if (!Object.keys(filter).length) {
      const liquidations = await this.liquidationServices.getLiquidations();
      return liquidations.map((liquidation) => liquidation.dataValues);
    }
    const liquidation =
      await this.liquidationServices.getLiquidationByFilter(filter);
    return liquidation.map((req) => req.dataValues);
  }

  @Post('/')
  async createLiquidation(
    @Body() data: { liquidation: Partial<ILiquidation> },
  ): Promise<ILiquidation> {
    const newLiquidation = await this.liquidationServices.createLiquidation(
      data.liquidation,
    );
    return newLiquidation.dataValues;
  }

  @Put('/')
  async updateLiquidation(
    @Body() data: { id: string; liquidation: ILiquidation },
  ): Promise<{ success: boolean }> {
    const success = await this.liquidationServices.updateLiquidation(
      data.id,
      data.liquidation,
    );
    return { success };
  }

  @Delete('/')
  async deleteLiquidation(
    @Query() data: { id: string },
  ): Promise<{ success: boolean }> {
    const success = await this.liquidationServices.deleteLiquidation(data.id);
    return { success };
  }
}
