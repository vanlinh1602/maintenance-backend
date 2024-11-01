import { Column, Model, Table } from 'sequelize-typescript';

import { ILiquidation, ILiquidationCreate } from '../types/liquidation';

@Table({
  tableName: 'liquidations',
})
export class Liquidation extends Model<ILiquidation, ILiquidationCreate> {
  @Column
  deviceId: string;

  @Column
  requestBy: string;

  @Column
  status: string;

  @Column
  reason: string;
}
