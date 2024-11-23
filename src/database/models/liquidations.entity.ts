import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';

import { ILiquidation, ILiquidationCreate } from '../types/liquidation';
import { Device } from './devices.entity';
import { User } from './users.entity';

@Table({
  tableName: 'liquidations',
})
export class Liquidation extends Model<ILiquidation, ILiquidationCreate> {
  @ForeignKey(() => Device)
  @Column
  deviceId: string;

  @ForeignKey(() => User)
  @Column
  requestBy: string;

  @Column
  status: string;

  @Column
  reason: string;
}
