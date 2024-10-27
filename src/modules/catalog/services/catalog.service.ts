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
    private userRepository: typeof User,
    @Inject('ROOM_REPOSITORY')
    private roomRepository: typeof Room,
    @Inject('ROLE_REPOSITORY')
    private roleRepository: typeof Role,
  ) {}

  async getCatalog() {
    const deviceStatus = await this.deviceStatusRepository.findAll();
    const deviceType = await this.deviceTypeRepository.findAll();
    const users = await this.userRepository.findAll();
    const rooms = await this.roomRepository.findAll();
    return {
      users: users.reduce((acc, user) => {
        acc[user.id] = user.dataValues;
        return acc;
      }, {}),
      rooms: rooms.reduce((acc, room) => {
        acc[room.id] = room.dataValues;
        return acc;
      }, {}),
      device: {
        status: deviceStatus.reduce((acc, status) => {
          acc[status.id] = status.dataValues;
          return acc;
        }, {}),
        type: deviceType.reduce((acc, type) => {
          acc[type.id] = type.dataValues;
          return acc;
        }, {}),
      },
    };
  }

  async updateCatalog({ action, type, data }) {
    switch (type) {
      case 'users':
        return await this.updateUser(action, data);
      case 'rooms':
        return await this.updateRoom(action, data);
      case 'device-status':
        return await this.updateDeviceStatus(action, data);
      case 'device-type':
        return await this.updateDeviceType(action, data);
      default:
        return false;
    }
  }

  async updateUser(action, data) {
    switch (action) {
      case 'add':
        return await this.userRepository.create(data);
      case 'edit':
        return await this.userRepository.update(data, {
          where: {
            id: data.id,
          },
        });
      case 'delete':
        return await this.userRepository.destroy({
          where: {
            id: data.id,
          },
        });
      default:
        return false;
    }
  }

  async updateRoom(action, data) {
    switch (action) {
      case 'add':
        return await this.roomRepository.create(data);
      case 'edit':
        return await this.roomRepository.update(data, {
          where: {
            id: data.id,
          },
        });
      case 'delete':
        return await this.roomRepository.destroy({
          where: {
            id: data.id,
          },
        });
      default:
        return false;
    }
  }

  async updateDeviceStatus(action, data) {
    switch (action) {
      case 'add':
        return await this.deviceStatusRepository.create(data);
      case 'edit':
        return await this.deviceStatusRepository.update(data, {
          where: {
            id: data.id,
          },
        });
      case 'delete':
        return await this.deviceStatusRepository.destroy({
          where: {
            id: data.id,
          },
        });
      default:
        return false;
    }
  }

  async updateDeviceType(action, data) {
    switch (action) {
      case 'add':
        return await this.deviceTypeRepository.create(data);
      case 'edit':
        return await this.deviceTypeRepository.update(data, {
          where: {
            id: data.id,
          },
        });
      case 'delete':
        return await this.deviceTypeRepository.destroy({
          where: {
            id: data.id,
          },
        });
      default:
        return false;
    }
  }
}
