import { Liquidation } from 'src/database/models/liquidations.entity';
import { ILiquidation } from 'src/database/types/liquidation';

export interface ILiquidationService {
  getLiquidation: (id: string) => Promise<Liquidation>;
  getLiquidationByFilter: (
    filter: Partial<ILiquidation>,
  ) => Promise<Liquidation[]>;
  getLiquidations: () => Promise<Liquidation[]>;
  createLiquidation: (
    liquidation: Partial<ILiquidation>,
  ) => Promise<Liquidation>;
  updateLiquidation: (id: string, liquidation: Liquidation) => Promise<boolean>;
  deleteLiquidation: (liquidationId: string) => Promise<boolean>;
}
