import { ConfigService } from '@nestjs/config';
import { NestApplication, NestFactory } from '@nestjs/core';
import bodyParser from 'body-parser';
import cors from 'cors';
import session from 'express-session';
import helmet from 'helmet';
import swaggerInit from 'src/swagger';

import { AppModule } from './app.module';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const MySQLStore = require('express-mysql-session')(session);

async function bootstrap() {
  global.ProductID = 'maintenance-backend';

  const app: NestApplication = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);
  const env: string = configService.get<string>('app.env');
  const timezone: string = configService.get<string>('app.timezone');
  const host: string = configService.get<string>('app.http.host');
  const port: number = configService.get<number>('app.http.port');

  process.env.TZ = timezone;

  // NOTICE: GLOBAL MIDDLEWARES
  app.use(helmet());
  app.use(
    cors({
      origin:
        env === 'development'
          ? [/localhost/, /127.0.0.1/]
          : [/\.kuma\.id\.vn$/],
      credentials: true,
    }),
  );

  app.use(bodyParser.urlencoded({ extended: false, limit: '50mb' }));
  app.use(bodyParser.json({ limit: '50mb' }));

  const sessionStore = new MySQLStore({
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 3306,
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'maintenance-backend',
  });

  app.use(
    session({
      name: ProductID,
      resave: false,
      saveUninitialized: true,
      proxy: true,
      cookie:
        process.env.NODE_ENV === 'development'
          ? { secure: false }
          : {
              secure: true,
              sameSite: 'none',
            },
      secret: process.env.SESSION_SECRET || 'dev',
      store: sessionStore,
    }),
  );

  // Swagger
  await swaggerInit(app);

  await app.listen(port, host);
}
bootstrap();
