import { Optional } from 'sequelize';

export interface IRoom {
  id: string;
  name: string;
  leader: string;
  createdAt: Date;
  updatedAt: Date;
}

export type IRoomCreate = Optional<IRoom, 'id'>;
