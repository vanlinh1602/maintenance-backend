import { Optional } from 'sequelize';

export interface IRoom {
  id: string;
  name: string;
  leader: string;
}

export type IRoomCreate = Optional<IRoom, 'id'>;
