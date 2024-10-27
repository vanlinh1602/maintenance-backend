import { Sequelize } from 'sequelize-typescript';
import { Device } from 'src/database/models/devices.entity';
import { DeviceType } from 'src/database/models/deviceType.entity';
import { Request } from 'src/database/models/requests.entity';
import { Role } from 'src/database/models/roles.entity';
import { Room } from 'src/database/models/rooms.entity';
import { User } from 'src/database/models/users.entity';

import { DeviceStatus } from './models/deviceStatus.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
      });
      sequelize.addModels([
        Device,
        DeviceType,
        DeviceStatus,
        Request,
        Role,
        Room,
        User,
      ]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
