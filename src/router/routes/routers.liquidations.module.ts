import { Module } from '@nestjs/common';
import { LiquidationApiController } from 'src/modules/liquidation/controllers/liquidation.api.controller';
import { LiquidationModule } from 'src/modules/liquidation/liquidation.module';

@Module({
  imports: [LiquidationModule],
  exports: [],
  providers: [],
  controllers: [LiquidationApiController],
})
export class RouterLiquidationModule {}
