import { Module } from '@nestjs/common';

import { Room } from './database/rooms.entity';
import { RoomService } from './services/rooms.service';

@Module({
  imports: [],
  exports: [
    RoomService,
    {
      provide: 'ROOM_REPOSITORY',
      useValue: Room,
    },
  ],
  providers: [
    RoomService,
    {
      provide: 'ROOM_REPOSITORY',
      useValue: Room,
    },
  ],
  controllers: [],
})
export class RoomModule {}
