import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';

import configs from './configs';
import { DatabaseModule } from './database/database.module';
import { RouterModule } from './router/router.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: configs,
      isGlobal: true,
      cache: true,
      envFilePath: ['.env', '.env.development'],
      expandVariables: true,
    }),
    DatabaseModule,
    RouterModule.forRoot(),
    ServeStaticModule.forRoot({
      rootPath: `${process.cwd()}/public`,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
