import { Sequelize } from 'sequelize-typescript';
import { Category } from 'src/modules/category/database/category.entity';
import { Device } from 'src/modules/devices/database/devices.entity';
import { Request } from 'src/modules/requests/database/requests.entity';
import { Role } from 'src/modules/roles/database/roles.entity';
import { Room } from 'src/modules/rooms/database/rooms.entity';
import { Staff } from 'src/modules/staffs/database/staffs.entity';

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
      sequelize.addModels([Device, Request, Role, Room, Staff, Category]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
