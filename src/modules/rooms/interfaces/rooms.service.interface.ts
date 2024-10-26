import { Optional } from 'sequelize';

import { Room } from '../database/rooms.entity';

export interface IRoom {
  id: string;
  name: string;
  leader: string;
}

export type IRoomCreate = Optional<IRoom, 'id'>;

export interface IRoomService {
  getRoom: (filter: Partial<IRoom>) => Promise<Room>;
  getRooms: () => Promise<Room[]>;
  createRoom: (room: Partial<IRoom>) => Promise<Room>;
  updateRoom: (id: string, room: Room) => Promise<boolean>;
  deleteRoom: (roomId: string) => Promise<boolean>;
}
