import { Module } from '@nestjs/common';
import { DeviceCatalog } from 'src/database/models/device-catalog.entity';
import { RequestCatalog } from 'src/database/models/request-catalog.entity';

import { Role } from '../../database/models/roles.entity';
import { Room } from '../../database/models/rooms.entity';
import { User } from '../../database/models/users.entity';
import { CatalogService } from './services/catalog.service';

@Module({
  imports: [],
  exports: [
    CatalogService,
    {
      provide: 'DEVICE_CATALOG_REPOSITORY',
      useValue: DeviceCatalog,
    },
    {
      provide: 'REQUEST_CATALOG_REPOSITORY',
      useValue: RequestCatalog,
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
      provide: 'DEVICE_CATALOG_REPOSITORY',
      useValue: DeviceCatalog,
    },
    {
      provide: 'REQUEST_CATALOG_REPOSITORY',
      useValue: RequestCatalog,
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
