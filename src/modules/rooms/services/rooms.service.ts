import { Inject, Injectable } from '@nestjs/common';

import { Room } from '../database/rooms.entity';
import { IRoom, IRoomService } from '../interfaces/rooms.service.interface';

@Injectable()
export class RoomService implements IRoomService {
  constructor(
    @Inject('ROOM_REPOSITORY')
    private roomRepository: typeof Room,
  ) {}

  async getRoom(filter: Partial<IRoom>): Promise<Room> {
    return this.roomRepository.findOne({
      where: filter,
    });
  }

  async getRooms(): Promise<Room[]> {
    return this.roomRepository.findAll();
  }

  async createRoom(room: Partial<IRoom>): Promise<Room> {
    return this.roomRepository.create(room);
  }

  async updateRoom(id: string, room: Partial<Room>): Promise<boolean> {
    const updated = await this.roomRepository.update(room, {
      where: {
        id,
      },
    });
    return updated[0] > 0;
  }

  async deleteRoom(roomId: string): Promise<boolean> {
    const deleted = await this.roomRepository.destroy({
      where: {
        id: roomId,
      },
    });
    return deleted > 0;
  }
}
