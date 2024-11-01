import { Optional } from 'sequelize';

export interface ILiquidation {
  id: string;
  deviceId: string;
  requestBy: string;
  status: string;
  reason: string;
  createdAt: Date;
  updatedAt: Date;
}

export type ILiquidationCreate = Optional<ILiquidation, 'id'>;
