import { Optional } from 'sequelize';

export interface IRole {
  id: string;
  name: string;
  isAdmin: boolean;
  isManager: boolean;
  isMaintenance: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export type IRoleCreate = Optional<IRole, 'id'>;
