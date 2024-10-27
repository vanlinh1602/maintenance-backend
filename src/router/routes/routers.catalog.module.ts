import { Module } from '@nestjs/common';
import { CatalogModule } from 'src/modules/catalog/catalog.module';
import { CatalogApiController } from 'src/modules/catalog/controllers/catalog.api.controller';

@Module({
  imports: [CatalogModule],
  exports: [],
  providers: [],
  controllers: [CatalogApiController],
})
export class RouterCatalogModule {}
