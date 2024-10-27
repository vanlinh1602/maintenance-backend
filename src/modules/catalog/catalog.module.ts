import { Module } from '@nestjs/common';
import { DeviceStatus } from 'src/database/models/deviceStatus.entity';

import { DeviceType } from '../../database/models/deviceType.entity';
import { Role } from '../../database/models/roles.entity';
import { Room } from '../../database/models/rooms.entity';
import { User } from '../../database/models/users.entity';
import { CatalogService } from './services/catalog.service';

@Module({
  imports: [],
  exports: [
    CatalogService,
    {
      provide: 'DEVICE_TYPE_REPOSITORY',
      useValue: DeviceType,
    },
    {
      provide: 'DEVICE_STATUS_REPOSITORY',
      useValue: DeviceStatus,
    },
    {
      provide: 'USER_REPOSITORY',
      useValue: User,
    },
    {
      provide: 'ROOM_REPOSITORY',
      useValue: Room,
    },
    {
      provide: 'ROLE_REPOSITORY',
      useValue: Role,
    },
  ],
  providers: [
    CatalogService,
    {
      provide: 'DEVICE_TYPE_REPOSITORY',
      useValue: DeviceType,
    },
    {
      provide: 'DEVICE_STATUS_REPOSITORY',
      useValue: DeviceStatus,
    },
    {
      provide: 'USER_REPOSITORY',
      useValue: User,
    },
    {
      provide: 'ROOM_REPOSITORY',
      useValue: Room,
    },
    {
      provide: 'ROLE_REPOSITORY',
      useValue: Role,
    },
  ],
  controllers: [],
})
export class CatalogModule {}
