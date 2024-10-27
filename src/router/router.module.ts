import { DynamicModule, ForwardReference, Module, Type } from '@nestjs/common';
import { RouterModule as NestJsRouterModule } from '@nestjs/core';

import { RouterCatalogModule } from './routes/routers.catalog.module';
import { RouterDeviceModule } from './routes/routers.devices.module';
import { RouterRequestModule } from './routes/routers.requests.module';
import { RouterUserModule } from './routes/routers.user.module';

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
      RouterCatalogModule,
      RouterUserModule,
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
        path: '/catalog',
        module: RouterCatalogModule,
      },
      {
        path: '/user',
        module: RouterUserModule,
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
