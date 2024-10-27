import { Optional } from 'sequelize';

export interface IRole {
  id: string;
  name: string;
}

export type IRoleCreate = Optional<IRole, 'id'>;
