import { DynamicModule, ForwardReference, Module, Type } from '@nestjs/common';
import { RouterModule as NestJsRouterModule } from '@nestjs/core';

import { RouterDeviceModule } from './routes/routers.devices.module';
import { RouterRequestModule } from './routes/routers.requests.module';
import { RouterRoleModule } from './routes/routers.roles.module';
import { RouterRoomModule } from './routes/routers.rooms.module';
import { RouterStaffModule } from './routes/routers.staffs.module';

@Module({})
export class RouterModule {
  static forRoot(): DynamicModule {
    const imports: (
      | DynamicModule
      | Type<any>
      | Promise<DynamicModule>
      | ForwardReference<any>
    )[] = [];

    // import router modules
    imports.push(
      RouterDeviceModule,
      RouterRequestModule,
      RouterRoleModule,
      RouterRoomModule,
      RouterStaffModule,
    );
    const routes = [
      {
        path: '/devices',
        module: RouterDeviceModule,
      },
      {
        path: '/requests',
        module: RouterRequestModule,
      },
      {
        path: '/roles',
        module: RouterRoleModule,
      },
      {
        path: '/rooms',
        module: RouterRoomModule,
      },
      {
        path: '/staffs',
        module: RouterStaffModule,
      },
    ];

    imports.push(NestJsRouterModule.register(routes));

    return {
      module: RouterModule,
      providers: [],
      exports: [],
      controllers: [],
      imports,
    };
  }
}
