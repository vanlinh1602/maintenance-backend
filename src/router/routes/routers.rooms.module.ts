import { Module } from '@nestjs/common';
import { RoomApiController } from 'src/modules/rooms/controllers/rooms.api.controller';
import { RoomModule } from 'src/modules/rooms/rooms.module';

@Module({
  imports: [RoomModule],
  exports: [],
  providers: [],
  controllers: [RoomApiController],
})
export class RouterRoomModule {}
