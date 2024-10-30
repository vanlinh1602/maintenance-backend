import { Inject, Injectable } from '@nestjs/common';
import { DeviceCatalog } from 'src/database/models/device-catalog.entity';
import { RequestCatalog } from 'src/database/models/request-catalog.entity';
import { User } from 'src/database/models/users.entity';

import { Role } from '../../../database/models/roles.entity';
import { Room } from '../../../database/models/rooms.entity';

@Injectable()
export class CatalogService {
  constructor(
    @Inject('DEVICE_CATALOG_REPOSITORY')
    private deviceCatalogRepository: typeof DeviceCatalog,
    @Inject('REQUEST_CATALOG_REPOSITORY')
    private requestCatalogRepository: typeof RequestCatalog,
    @Inject('USER_REPOSITORY')
    private userRepository: typeof User,
    @Inject('ROOM_REPOSITORY')
    private roomRepository: typeof Room,
    @Inject('ROLE_REPOSITORY')
    private roleRepository: typeof Role,
  ) {}

  async getCatalog() {
    const deviceCatalogs = await this.deviceCatalogRepository.findAll();
    const requestCatalogs = await this.requestCatalogRepository.findAll();
    const users = await this.userRepository.findAll();
    const rooms = await this.roomRepository.findAll();
    const roles = await this.roleRepository.findAll();
    const { deviceStatus, deviceType } = deviceCatalogs.reduce(
      (acc, device) => {
        if (device.type === 'status') {
          acc.deviceStatus[device.id] = device.dataValues;
        } else {
          acc.deviceType[device.id] = device.dataValues;
        }
        return acc;
      },
      { deviceStatus: {}, deviceType: {} } as {
        deviceStatus: Record<string, any>;
        deviceType: Record<string, any>;
      },
    );

    const { requestStatus, requestType } = requestCatalogs.reduce(
      (acc, request) => {
        if (request.type === 'status') {
          acc.requestStatus[request.id] = request.dataValues;
        } else {
          acc.requestType[request.id] = request.dataValues;
        }
        return acc;
      },
      { requestStatus: {}, requestType: {} } as {
        requestStatus: Record<string, any>;
        requestType: Record<string, any>;
      },
    );

    return {
      users: users.reduce((acc, user) => {
        acc[user.id] = user.dataValues;
        return acc;
      }, {}),
      rooms: rooms.reduce((acc, room) => {
        acc[room.id] = room.dataValues;
        return acc;
      }, {}),
      roles: roles.reduce((acc, role) => {
        acc[role.id] = role.dataValues;
        return acc;
      }, {}),
      device: {
        status: deviceStatus,
        type: deviceType,
      },
      request: {
        status: requestStatus,
        type: requestType,
      },
    };
  }

  async updateCatalog({
    action,
    type,
    data,
  }: {
    action: string;
    type: string;
    data: any;
  }) {
    switch (type) {
      case 'users':
        return await this.updateUser(action, data);
      case 'rooms':
        return await this.updateRoom(action, data);
      case 'roles':
        return await this.updateRole(action, data);
      case 'device-status':
        return await this.updateDeviceCatalog(action, data, 'status');
      case 'device-type':
        return await this.updateDeviceCatalog(action, data, 'type');
      case 'request-status':
        return await this.updateRequestCatalog(action, data, 'status');
      case 'request-type':
        return await this.updateRequestCatalog(action, data, 'type');
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

  async updateRole(action, data) {
    switch (action) {
      case 'add':
        return await this.roleRepository.create(data);
      case 'edit':
        return await this.roleRepository.update(data, {
          where: {
            id: data.id,
          },
        });
      case 'delete':
        return await this.roleRepository.destroy({
          where: {
            id: data.id,
          },
        });
      default:
        return false;
    }
  }

  async updateDeviceCatalog(action, data, type) {
    switch (action) {
      case 'add':
        return await this.deviceCatalogRepository.create({ ...data, type });
      case 'edit':
        return await this.deviceCatalogRepository.update(data, {
          where: {
            id: data.id,
          },
        });
      case 'delete':
        return await this.deviceCatalogRepository.destroy({
          where: {
            id: data.id,
          },
        });
      default:
        return false;
    }
  }

  async updateRequestCatalog(action, data, type) {
    switch (action) {
      case 'add':
        return await this.requestCatalogRepository.create({ ...data, type });
      case 'edit':
        return await this.requestCatalogRepository.update(data, {
          where: {
            id: data.id,
          },
        });
      case 'delete':
        return await this.requestCatalogRepository.destroy({
          where: {
            id: data.id,
          },
        });
      default:
        return false;
    }
  }
}
