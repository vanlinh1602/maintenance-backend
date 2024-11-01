import { Module } from '@nestjs/common';
import { Liquidation } from 'src/database/models/liquidations.entity';

import { LiquidationService } from './services/liquidation.service';

@Module({
  imports: [],
  exports: [
    LiquidationService,
    {
      provide: 'LIQUIDATION_REPOSITORY',
      useValue: Liquidation,
    },
  ],
  providers: [
    LiquidationService,
    {
      provide: 'LIQUIDATION_REPOSITORY',
      useValue: Liquidation,
    },
  ],
  controllers: [],
})
export class LiquidationModule {}
