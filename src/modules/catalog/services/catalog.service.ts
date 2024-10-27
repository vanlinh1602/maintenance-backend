import { Inject, Injectable } from '@nestjs/common';
import { DeviceStatus } from 'src/database/models/deviceStatus.entity';
import { User } from 'src/database/models/users.entity';

import { DeviceType } from '../../../database/models/deviceType.entity';
import { Role } from '../../../database/models/roles.entity';
import { Room } from '../../../database/models/rooms.entity';

@Injectable()
export class CatalogService {
  constructor(
    @Inject('DEVICE_TYPE_REPOSITORY')
    private deviceTypeRepository: typeof DeviceType,
    @Inject('DEVICE_STATUS_REPOSITORY')
    private deviceStatusRepository: typeof DeviceStatus,
    @Inject('USER_REPOSITORY')
    private staffRepository: typeof User,
    @Inject('ROOM_REPOSITORY')
    private roomRepository: typeof Room,
    @Inject('ROLE_REPOSITORY')
    private roleRepository: typeof Role,
  ) {}
}
