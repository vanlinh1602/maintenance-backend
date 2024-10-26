import { Body, Controller, Get, Param, Post } from '@nestjs/common';

import { IRoom } from '../interfaces/rooms.service.interface';
import { RoomService } from '../services/rooms.service';

@Controller()
export class RoomApiController {
  constructor(private readonly roomServices: RoomService) {}

  @Get('/get/all')
  async getRooms(): Promise<IRoom[]> {
    const rooms = await this.roomServices.getRooms();
    return rooms.map((room) => room.dataValues);
  }

  @Get('/get/:id')
  async getRoom(@Param('id') id: string): Promise<IRoom> {
    const room = await this.roomServices.getRoom({ id });
    return room.dataValues;
  }

  @Post('/get')
  async getRoomByFilter(@Body() filter: Partial<IRoom>): Promise<IRoom> {
    const room = await this.roomServices.getRoom(filter);
    return room.dataValues;
  }

  @Post('/create')
  async createRoom(@Body() data: { room: Partial<IRoom> }): Promise<IRoom> {
    const newRoom = await this.roomServices.createRoom(data.room);
    return newRoom.dataValues;
  }

  @Post('/update')
  async updateRoom(
    @Body() data: { id: string; room: IRoom },
  ): Promise<{ success: boolean }> {
    const success = await this.roomServices.updateRoom(data.id, data.room);
    return { success };
  }

  @Post('/delete')
  async deleteRoom(
    @Body() data: { id: string },
  ): Promise<{ success: boolean }> {
    const success = await this.roomServices.deleteRoom(data.id);
    return { success };
  }
}
